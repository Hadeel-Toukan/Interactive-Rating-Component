 // Initialize a variable to store the focused circle button
var focusedCircleButton = null;

// Add a focus event listener to the .circle buttons
$(".circle").on("focus", function () {
  focusedCircleButton = this;
});

// Add a click event listener to the submit button
$(".submit").click(function () {
  // Check if a .circle button is focused
  if (focusedCircleButton !== null) {
    // Get the value of the focused .circle button
    var selectedValue = $(focusedCircleButton).val();
    $(".question").toggle();
    $(".highlighted").append(" "+selectedValue+" out of 5")
    $(".postSubmit").toggle();
  } 
});
