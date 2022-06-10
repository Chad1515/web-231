/**
Title: Web -231 Assignment 3.2
Author: Tierre Green from GitHub
Date: 06/09/2022
Modified By: Chad ONeal
Description: Temp Conversion App Assignment 3.2     
*/


/**
* function to convert Fahrenheit to celsius.
*/

/**
 * onclick button function.
 */

 document.getElementById("convert-btn").onclick = function() {myFunction()};


/**
* function establishing conversion
*/ 

    function myFunction() {
 
/**fahrenheit variable. */
     let fahrenheit = document.getElementById("txtFahrenheit").value;
 
/**formula variable. */
    const conversion = ((parseFloat(fahrenheit) - 32) / 1.8).toFixed(2);
 
 /**final calculation. */ 
     document.getElementById("convert-content").innerHTML = conversion;
}
