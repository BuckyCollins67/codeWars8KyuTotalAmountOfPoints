// In this kata you will create a function that takes in a list and returns a list with the reverse 
// order.


function reverseList(list) {
    return (list.reverse())  //originally I logged the result to the console, but apparently code wars wanted it returned.
}

// ------------------------------------------------------------
// MayanWolf, who has gone through the previous cohort, goes through a "P.R.E.P" process.  I'll try and
// emulate that here.

// P - (Parameters) - Will this always take a set of positive intergers?  Will we ever be given an empty
// array?

// R - (Return) - Our intention is to return an array, in reverse order.  As noted above, console.log is
// not returning it, and was infact the wrong solution.

// E - (Examples) - Three examples of what is considered a proper answer.
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]
// * [2, 4, 6] -> [6, 4, 2]

// P - (Pseudocode) - In plain english our code will...
// Take an array named 'list'
// Use a built in method in javaScript to reverse that array called 'list'
// return that reversed array called 'list'

// ------------------------------------------------------------


// Test case

reverseList([1,2,3])

console.log(reverseList([2,4,6]),([6,4,2]))