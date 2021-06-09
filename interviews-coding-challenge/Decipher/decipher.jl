cipherText = "KUHPVIBQKVOSHWHXBPOFUXHRPVLLDDWVOSKWPREDDVVIDWQRBHBGLLBBPKQUNRVOHQEIRLWOKKRDD"
println("Begin to decrypt cipher text: ", cipherText)

#https://en.wikipedia.org/wiki/Letter_frequency

frequencies = Dict(	"A"	=>	8.167,
					"B"	=>	1.492,
					"C"	=>	2.782,
					"D"	=>	4.253,
					"E"	=>	12.702,
					"F"	=>	2.228,
					"G"	=>	2.015,
					"H"	=>	6.094,
					"I"	=>	6.966,
					"J"	=>	0.153,
					"K"	=>	0.772,
					"L"	=>	4.025,
					"M"	=>	2.406,
					"N"	=>	6.749,
					"O"	=>	7.507,
					"P"	=>	1.929,
					"Q"	=>	0.095,
					"R"	=>	5.987,
					"S"	=>	6.327,
					"T"	=>	9.056,
					"U"	=>	2.758,
					"V"	=>	0.978,
					"W"	=>	2.360,
					"X"	=>	0.150,
					"Y"	=>	1.974,
					"Z"	=>	0.074)

#https://code.activestate.com/recipes/142813-deciphering-caesar-code/

println("Initializing frequency array for ENGLISH...")
ENGLISH = [0.0749, 0.0129, 0.0354, 0.0362, 0.1400, 0.0218, 0.0174, 0.0422, 0.0665, 0.0027, 0.0047, 0.0357, 
		   0.0339, 0.0674, 0.0737, 0.0243, 0.0026, 0.0614, 0.0695, 0.0985, 0.0300, 0.0116, 0.0169, 0.0028, 
		   0.0164, 0.0004]

variances = zeros(length(ENGLISH))
counts = zeros(length(ENGLISH))
for letter in cipherText
	code = Int(letter) - Int('A')
	if code < 1
		code += 26
	end
	counts[code] += 1
end

for shift in 0:length(ENGLISH) - 1
	println("Applying inverse caesar shift: ", shift)
	shiftedCounts = circshift(counts, -1 * shift)
	variance = sum(broadcast(abs, ((shiftedCounts / length(cipherText) - ENGLISH) / ENGLISH)))
	variances[shift + 1] = variance;
end
println("The variance for each shift is calculated to be: \n", variances)
minshift = argmin(variances)

println("Inverse Caesar shift by ", minshift, " yielded minimal variance of ", variances[minshift], " respect to frequency of letters in ENGLISH...")

shiftedTextList = []
for letter in cipherText
	code = Int(letter) - minshift
	if code < Int('A')
		code += 26
	end
	append!(shiftedTextList, Char(code))
end
shiftedText = join(shiftedTextList)
println("Deciphering minimal variance shifted text: ", shiftedText, " with columnar transposition...")

#Installing combinatorics library:
#import Pkg; Pkg.add("Combinatorics")
#Installing progress meter:
#import Pkg; Pkg.add("ProgressMeter")

using Combinatorics
using ProgressMeter

filename = "./google-10000-english.txt"
println("Loading common words DICTIONARY from: ", filename)
DICTIONARY = readlines(filename)

for width in 2:10
	println("Applying columnar transposition with width: ", width)
	matrix = []
	height = Int(ceil(length(shiftedText) / width))
	total = width * height
	for index in 1:total
		if index <= length(shiftedText)
			append!(matrix, shiftedText[index])
		else
			append!(matrix, "?")
		end
	end
	matrix = reshape(matrix, (height, width))
	orders = collect(permutations(collect(1:width)))
	completed = 0
	n = length(orders)
	p = Progress(n, 1, "Computing all permutations:", 50, :black)
	bestPlainText = "?"
	bestPlainTextCommonPercentage = 0
	for permutation in orders
		plainTextMatrix = []
		for row in 1:height
			for columnIndex in 1:width
				char = matrix[row, permutation[columnIndex]]
				if char != '?'
					append!(plainTextMatrix, char)
				end
			end
		end
		plainText = join(plainTextMatrix)
		wordCount = 0
		wordLengthSum = 0
		words = []
		for word in DICTIONARY
			if length(uppercase(word)) > 3 && occursin(uppercase(word), plainText)
				wordCount += 1;
				wordLengthSum += length(word)
				push!(words, uppercase(word))
			end
		end
		percentageCommon = wordLengthSum / length(plainText) * 100
		if percentageCommon > 50
			println("\rColumnar transposition with the order of: ", permutation, " yielded a string containing ", wordCount, " common word(s) which makes it ", percentageCommon, "% common words, below is the string:\n", plainText, "\ncontaining the words:\n", words)
			if percentageCommon > bestPlainTextCommonPercentage
				bestPlainText = plainText
				bestPlainTextCommonPercentage = percentageCommon
			end
			println("Currently, the best plain text is:\n", bestPlainText, " which is ", bestPlainTextCommonPercentage, "% common words...")
		end
		next!(p)
	end
end