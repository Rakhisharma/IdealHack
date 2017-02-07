// Write JavaScript here
function validateForm() {
  var p = document.forms["aForm"] ["fname"].value;
  if( p == " ") {
    alert("Thankyou for donating");
    return false;
  }
}

//Problem statement
//Part 1
//You have to create 1 form field where user can 
//write amount of money he wants to donate 
//and an actionable button to submit that. This has to be 
//within given box only.

//Part2
//After user clicks submit, he should see a
//subtle animation saying "Thank you for Donating."

