/*
============================================
; Title:  oneal-assignment 2.3.js
; Author: Chad ONeal
; Date:  06/03/2022
; Description: Displays message to the console window
;===========================================
*/

/**
============================================
; Title: JavaScript toLocaleString() Method
; Author: https://www.w3schools.com/jsref/jsref_tolocalestring.asp
; Date: 06/03/2022
; Modified By: Chad ONeal
; Description: Locale date js from w3schools.com
;===========================================
 */

 /**
============================================
; Title: JavaScript toFixed() Method
; Author: https://www.w3schools.com/jsref/jsref_tofixed.asp
; Date: 06/02/2022
; Modified By: Chad ONeal
; Description: fixed decimal point js from w3schools.com
;===========================================
 */

 /**
  * Employee 1 variables declared and created to bind each data set
  * to it's individual list item ids' innerHTML.
  */

  let firstName1 = "Chad";
  let lastName1 = "ONeal";
  let address1 = "10023 Hill Rd";
  let hireDate1 = new Date();
  let locale1 = hireDate1.toLocaleDateString();  
  let payRate1 = 13.50;
  let fixed1 = payRate1.toFixed(1);
  
  /**
   * calling bound documents to listed items for execution for employee 1.
  */
  
  document.getElementById("txtFirstNameChad").innerHTML = firstName1;
  document.getElementById("txtLastNameONeal").innerHTML = lastName1;
  document.getElementById("txtAddressChad").innerHTML = address1;
  document.getElementById("txtHireDateChad").innerHTML = locale1;
  document.getElementById("txtPayRateChad").innerHTML = fixed1;
  
  /**
    * Employee 2 variables declared and created to bind each data set
    * to it's individual list item ids' innerHTML.
    */
  
   let firstName2 = "Matt";
   let lastName2 = "Neal";
   let address2 = "12655 Daisywood Dr";
   let hireDate2 = new Date();
   let locale2 = hireDate2.toLocaleDateString();  
   let payRate2 = 16.75;
   let fixed2 = payRate2.toFixed(1);
  
   /**
   * Calling bound documents to listed items for execution for employee 2.
  */
   
   document.getElementById("txtFirstNameMatt").innerHTML = firstName2;
   document.getElementById("txtLastNameNeal").innerHTML = lastName2;
   document.getElementById("txtAddressMatt").innerHTML = address2;
   document.getElementById("txtHireDateMatt").innerHTML = locale2;
   document.getElementById("txtPayRateMatt").innerHTML = fixed2;
  
   /**
    * Employee 3 variables declared and created to bind each data set
    * to it's individual list item ids' innerHTML.
    */
  
   let firstName3 = "Danny";
   let lastName3 = "Bacosa";
   let address3 = "7103 South Ave";
   let hireDate3 = new Date();
   let locale3 = hireDate3.toLocaleDateString();  
   let payRate3 = 12.75;
   let fixed3 = payRate3.toFixed(1);
  
   /**
   * Calling bound documents to listed items for execution for employee 3.
  */
   
   document.getElementById("txtFirstNameDan").innerHTML = firstName3;
   document.getElementById("txtLastNameBaco").innerHTML = lastName3;
   document.getElementById("txtAddressDan").innerHTML = address3;
   document.getElementById("txtHireDateDan").innerHTML = locale3;
   document.getElementById("txtPayRateDan").innerHTML = fixed3;