There are 8 type of sort algorithms:
    - Insertion
    - Selection
    - Bubble
    - Shell
    - Merge
    - Heap
    - Quick
    - Quick 3

Merge Sort

Split your array in half. Recursively merge sort the left and right sub-arrays. Then, merge them together (linear time) to get the full sorted array.

Pros:

Has  𝑂(𝑛log𝑛)  worst-case run time.
Of the 3 algorithms here, it is the only one that is stable, so if you want to retain the ordering of comparatively equivalent items, this should be your go-to.
Easy to implement on linked list data structures. Does not require random access.
Cons:

Has  𝑂(𝑛)  space complexity, which is worse than the other 2 sorts.
Slower than the other 2 algorithms in practice. Why? You have to write all your data into another array and back into your original one. Copying is usually slower than comparing.
Heap Sort

Generate a heap data structure on the array. Then, pop the top of the heap and move it to the end of the array. Repeat until the heap is empty and the entire array is sorted.

Pros:

Has  𝑂(𝑛log𝑛)  worst-case run time.
Can sort in-place so uses  𝑂(1)  additional space.
Cons:

Unstable!
Still much slower than Quick Sort on average. You still need to perform a swap on every element in the array, even if it’s already in the right place.
Quick Sort

Pick a pivot from the array and partition the array into sub-arrays. Everything in the left sub-array is less than the pivot. Everything in the right sub-array is greater than the pivot. Recursively sort the left and right sub-arrays.

Pros:

Generally the fastest sorting algorithm in practice. It only swaps what needs to be swapped. Swaps are slow!
Can be performed in-place, but in practice, the stack frames from recursive function calls results in  𝑂(log𝑛)  space complexity.
Cons:

Has  𝑂(𝑛2)  in the worst case. Ideally, the chosen pivot is the median. The further away it is from the median, the worse the performance.
Like Heap Sort, it’s unstable!