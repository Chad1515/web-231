/**
;Title: Assignment 5.2 Sequence Game
;Author: Tierre Green from Github
;Modified by: Chad ONeal
;Date: 06/23/2022
;Description: Assignment 5.2 Sequence Game 
*/



// onclick function for button
document.getElementById("btnDisplaySequence").onclick = function() {myFunction()};


//function of selected choice for results 
function myFunction() {

//choice variable declaration
    let choice = document.getElementById("sequenceddl");

//declaration of results 
    let results = "";

//console log of choice
    console.log("choice log", choice);

//choice variable declared as lookup, user interaction determines options element by selecting value
    let lookup = choice.options[choice.selectedIndex].value;

//if statement for query of odd numbers lower than 20
    if (lookup == "odd") {

    //for statement declaring i setting parameters of adding numbers up to 20.
        for (let i = 0; i < 20; i++) {

        //if statement for skip a number result. 
            if(i % 2 != 0) {

            //if statement to set results numbers lower than 19.
                if (i < 19) {

                    results += i + ", ";

            //else statement to set no comma for all other results.
                } else {

                results += i;

                }
            }
        }
    /**resulting numbers shown by bind of seqResults div 
     * since fibonacci results are different from the other results.
     */
        document.getElementById("seqResults").innerHTML = results;

//if statement of odd numbers lower than 20.
    } else if (lookup == "even") {

    //for statement declaring i sets parameter to add numbers from 2 up to 20.
        for (let i = 2; i < 20; i++) {

        //if statement that creates skip a number. 
           if (i % 2 == 0) {

            //if statement to set for under 18 results    
                if (i < 18) {

                    results += i + ", ";

            //else statement to set no comma for all other results.
                } else {

                    results += i;
                }
            }
        }

    /**resulting numbers shown by bind of seqResults div 
     * since fibonacci results are different from the other results
     */
        document.getElementById("seqResults").innerHTML = results;

//else if fibonacci query.
    } else if (lookup == "fibonacci") {
     
    //declarition of variables num1, num2, fibonacciSequenceText, and next
        let num1 = 0;

        let num2 = 1;

        let next;

        let fibonacciSequenceText = "";

    //while statement for fibonacci numbers lower than 40.
        while (num1 < 40) {

            //fibonacci sequence with numbers and comma.
                fibonacciSequenceText += num1 + ", ";

            //defining next number added as num1 + num2 up to 40.
                next = num1 + num2;

            //num2 as new num1
                num1 = num2;

            //next as new num2
                num2 = next;
               
        }

    //removal of last comma and space & binding fibonacciSequenceText to seqResults div. 
        document.getElementById("seqResults").innerHTML = fibonacciSequenceText.slice(0, -2);
 
//else statement for alert of submission, happens without changing default select option.
    } else {

        alert("Invalid selection, try again please!");

    } 
}