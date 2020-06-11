// recursion approach 
function isPalindrome(str) {
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
    // we use first two if to make comparation work if it all pass until there only 1 character then the whole string is true
    // let explain the hard part which using recursion in third if statement
    // if the first character and the last are the same letter we can re use the function with the next first character and last character
    // 'tacocat'
    //  |     |
    // str[0] str.slice(-1)
    // as condition are meet with both letter are "t"
    // we move on with the next one by using slice(1, -1)
    // 'acoca'
    // it repeat until str only have 'o'
    // which meet first if statement condition so we return true
    // there is case where there are last 2 characters for something like 'cattac'
    // the second if statement will be meet and return true
    return false;
}
module.exports = isPalindrome