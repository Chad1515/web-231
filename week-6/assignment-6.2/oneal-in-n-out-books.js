/**
============================================
; Title: Assignment 6.2 - In-N-Out-Books
; Author: Tierre Green from Github 
; Modified by: Chad ONeal
; Date: 06/29/2022
; Description: In-N-Out-Books Assignment 6.2
============================================
*/


//button submission function
document.getElementById("btnDisplayListing").onclick = function() {myFunction()};

//declaration of favorite books variable, display set to none.
let books = document.getElementById("favBooks");
document.getElementById("favBooks").style.display = "none";

//declaration of favorite authors variable, display set to none.
let authors = document.getElementById("favAuthors");
document.getElementById("favAuthors").style.display = "none";

//function for results.
function myFunction() {

//declaration of choice variable.
  let choice = document.getElementById("favList").value;

//if condition for books, shows results.
  if (choice == "books") {
    books.style.display = "block";
    authors.style.display = "none";

//else if statement for authors and showing results.
  } else if (choice == "authors") {
    authors.style.display = "block";
    books.style.display = "none";

//else statement for all other conditions to not display.
  } else {
    authors.style.display = "none";
    books.style.display = "none";
  }
};

//JSON setup of fav books and fav authors with isbns, page amounts, titles, genre, and names.

//favorite book listing
  const bookSelected = {
    isbn: "0-449-30012-9",
    title: "Selected Short Stories of Nathaniel Hawthorne",
    pages: "254",
  }
  //favorite book listing
  const bookAnxious = {
    isbn: "978-0310087311",
    title: "Anxious for Nothing",
    pages: "126",
  }
  //favorite book listing
  const bookBlink = {
    isbn: "978-0316010665",
    title: "Blink",
    pages: "276",
  }


//favorite author listing
  const authorNathan = {
    name: "Nathaniel Hawthorne",
    genre: "Dark Romanticism",
  }
//favorite author listing
  const authorMax = {
    name: "Max Lucado",
    genre: "Christian",
  }
//favorite author listing
  const authorMal = {
    name: "Malcolm Gladwell",
    genre: "Non-Fiction",
  };

//Favorite Books
//json object literals anchored to html table row 1.
document.getElementById("txtSelectedISBN").innerHTML = bookSelected.isbn;

document.getElementById("txtSelectedTitle").innerHTML = bookSelected.title;

document.getElementById("txtSelectedPages").innerHTML = bookSelected.pages;

//json object literals anchored to html table row 2.
document.getElementById("txtAnxiousISBN").innerHTML = bookAnxious.isbn;

document.getElementById("txtAnxiousTitle").innerHTML = bookAnxious.title;

document.getElementById("txtAnxiousPages").innerHTML = bookAnxious.pages;

//json object literals anchored to html table row 3.
document.getElementById("txtBlinkISBN").innerHTML = bookBlink.isbn;

document.getElementById("txtBlinkTitle").innerHTML = bookBlink.title;

document.getElementById("txtBlinkPages").innerHTML = bookBlink.pages;

//Favorite Authors
//json object literals anchored to html table for favorite author row 1.
document.getElementById("txtNathanName").innerHTML = authorNathan.name;

document.getElementById("txtNathanGenre").innerHTML = authorNathan.genre;

//json object literals anchored to html table for favorite author row 2.
document.getElementById("txtMaxName").innerHTML = authorMax.name;

document.getElementById("txtMaxGenre").innerHTML = authorMax.genre;

//json object literals anchored to html table for favorite author row 3.
document.getElementById("txtMalName").innerHTML = authorMal.name;

document.getElementById("txtMalGenre").innerHTML = authorMal.genre;
