/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Amr Gaballa
      Date:  4/12/2025 

      Filename: task1.js
*/
// JavaScript 7th Edition
// Chapter 6
// Project to validate a form used for setting up a new account

const submitButton = document.getElementById("submitButton");
const pwd = document.getElementById("pwd");
const pwd2 = document.getElementById("pwd2");

submitButton.addEventListener("click", function(event) {
   const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

   if (!passwordPattern.test(pwd.value)) {
      pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number");
      pwd.reportValidity();
      event.preventDefault();
   } else if (pwd.value !== pwd2.value) {
      pwd2.setCustomValidity("Your passwords must match");
      pwd2.reportValidity();
      event.preventDefault();
   } else {
      pwd.setCustomValidity("");
      pwd2.setCustomValidity("");
   }
});

