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


function points(games) {
    // your code here
    // I honest to god do not understand this scoring system.  I've looked at the solutions in the codewars solutions page

    //totalPoints will store the accumulated points
    let totalPoints = 0

    // loop through the games array to get the scores
    for(i=0; i<games.length; i++){

        //assign the scores, since games is an array of strings, we must use Number() to turn the string scores into numbers

        let xScore = Number(games[i].charAt(0))
        let yScore = Number(games[i].charAt(2))

        if (xScore > yScore){ totalPoints += 3 }
        if (xScore < yScore){ totalPoints += 0 }
        if (xScore === yScore) {totalPoints +=1 }
    }

    return totalPoints;

  }





// ------------------------------------------------------------
// MayanWolf, who has gone through the previous cohort, goes through a "P.R.E.P" process.  I'll try and
// emulate that here.

// P - (Parameters) - We are taking in an array.  

// R - (Return) - We intend to return our total points based on our scores in the game

// E - (Examples) - Examples of what is considered a proper answer.
// * ["3:1", "2:2", "0:1"]  -> 4
// * ["1:1", "0,0", "2:2"]  -> 3


// P - (Pseudocode) - Example: In plain english our code will...
// Take in an array called "games"
// Create a variable to hold our total
// Loop/iterate through the array, converting the string to actual numbers we can compare
// Compare the two values in the array entry, and add the appropriate amount to the variable
// Return the variable value.

// ------------------------------------------------------------


// Test case

describe("Basic tests", function(){
    it("Testing for points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'])", function(){
      Test.assertEquals(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30);
    });  
    it("Testing for points(['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4'])", function(){
      Test.assertEquals(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , 10);
    });
    it("Testing for points(['0:1','0:2','0:3','0:4','1:2','1:3','1:4','2:3','2:4','3:4'])", function(){
      Test.assertEquals(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) , 0);
    });
    it("Testing for points(['1:0','2:0','3:0','4:0','2:1','1:3','1:4','2:3','2:4','3:4'])", function(){
      Test.assertEquals(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) , 15);
    });
    it("Testing for points(['1:0','2:0','3:0','4:4','2:2','3:3','1:4','2:3','2:4','3:4'])", function(){
      Test.assertEquals(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) , 12);
    });
  });