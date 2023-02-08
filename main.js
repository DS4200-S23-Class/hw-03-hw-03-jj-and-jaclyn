
// button function


// begining number as 1
var num = 1;

function buttonClicked() {

	console.log("button was clicked!")

	// which result will show when clicked the botton
	let newText = "Number of times button clicked:"+ (num++);

	// select the buttom which modify
	let  buttonDiv = document.getElementById("button-div");

	buttonDiv.innerHTML = newText;

}