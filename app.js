//Paste codewars question here.
// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4








// ------------------------------------------------------------
// MayanWolf, who has gone through the previous cohort, goes through a "P.R.E.P" process.  I'll try and
// emulate that here.

// P - (Parameters) - Example: Will this always take a set of positive intergers?  Will we ever be given an empty
// array?

// R - (Return) - Example: Our intention is to return an array, in reverse order.  As noted above, console.log is
// not returning it, and was infact the wrong solution.

// E - (Examples) - Example: Three examples of what is considered a proper answer.
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]
// * [2, 4, 6] -> [6, 4, 2]

// P - (Pseudocode) - Example: In plain english our code will...
// Take an array named 'list'
// Use a built in method in javaScript to reverse that array called 'list'
// return that reversed array called 'list'

// ------------------------------------------------------------


// Test case

reverseList([1,2,3])

console.log(reverseList([2,4,6]),([6,4,2]))