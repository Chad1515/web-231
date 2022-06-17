/**
=============================================
Title: Assignment 4.2 Number Guessing Game
Author: Tierre Green from Github
Date: 06/16/2022
Modified By: Chad ONeal
Description: random number javascript.
=============================================
*/


/**
  * function to create random number.
 */
 const rnd = Math.floor((Math.random() * 10) + 1);

 /**
  * onclick function.
 */
document.getElementById("btnSubmit").onclick = function() {myFunction()};

function myFunction() {

//myNumber variable.
    let myNumber = document.getElementById("txtMyNumber").value;

//declaration  of results to a variable.    
    let results;

/**
 * Condition when myNumber is less than the random number;
 * limits the numbers to <less than or equal to 10>;
 * string results.
*/
    if (myNumber > rnd && myNumber <= 10) {
        results = "The number is less than" + " " + myNumber;

/**
 * When myNumber is greater than random number condition;
 * the condition is limited to numbers <greater than or equal to 1>;
 * string results.
*/
    } else if (myNumber < rnd && myNumber >= 1) {
        results = "The number is greater than" + " " + myNumber;
        
/**
 * Condition when myNumber equal to the random number;
 * string results.
*/        
    } else if (myNumber == rnd) {
        results = "Congratulations! You picked the correct number!";

//All other conditions.
    } else {
        results = "Please pick a number between 1 and 10.";
    } 

/**script that generates string result
 * established by current input and condition of random numbers.
 */
    document.getElementById("numResult").innerHTML = results;
};