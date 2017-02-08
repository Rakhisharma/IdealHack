

// Write JavaScript here
//Problem statement
//Part 1
//You have to create 1 form field where user can 
//write amount of money he wants to donate 
//and an actionable button to submit that. This has to be 
//within given box only.

//Part2
//After user clicks submit, he should see a
//subtle animation saying "Thank you for Donating."

// <--------------------------------------------------------------->

// Get the popup
var popup = document.getElementById('mypopup');

// Get the button that opens the popup
var btn = document.getElementById("btn");

// Get the <span> element that closes the popup
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, if condition satisfied then open the popup 
btn.onclick = function validateForm() {
    var x = document.forms["donationForm"]["fname"].value;
    if (x >= 1) {
    popup.style.display = "block";
  }
}
// When the user clicks on <span> (x), close the popup
span.onclick = function() {
    popup.style.display = "none";
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}
