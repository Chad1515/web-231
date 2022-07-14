/**
============================================
; Title: Assignment 8.2 - Alphabet Game
; Author: Tierre Green from Github 
; Modified by: Chad ONeal
; Date: 07/14/2022
; Description: Alphabet Game Assignment 8.2 html code
============================================
*/


//button submission function.
document.getElementById("FindLetter").onclick = function() {myFunction()};

//alphabet string variable declaration. 
const alphabet = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//variable declaration for output
let Output = "";

//variable declaration for location
let Location;

//for/ in loop based on instructions from assignment.
for (Location in alphabet) {
    Output += alphabet[Location] + ", ";
};

//alphabet binding to alphabet div card.
document.getElementById("alphabet").innerHTML = Output.slice(1, 78);

function myFunction() {

//variable position binding input value.
    let pos = document.getElementById("Position").value;

//position binding & letter variable declaration. 
    let letter = alphabet[pos];

//if condition that determines results.
    if (letter == undefined) {
        document.getElementById("alpha-letter").innerHTML = "There are not " + pos + " letters in the alphabet.";

//else if condition to display message for numbers beyond 1-26. 
    } else if (pos == 0) {

        document.getElementById("alpha-letter").innerHTML = "There are not " + pos + " letters in the alphabet.";

//else condition shows results when position is within numbers 1-26. 
    } else {
        document.getElementById("alpha-letter").innerHTML = letter + " is at position " + pos + " in the alphabet.";
    };

};