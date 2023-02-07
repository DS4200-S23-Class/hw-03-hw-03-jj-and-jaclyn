
// button function


var num = 1;

function buttonClicked() {

	console.log("button was clicked!")

	let newText = "Number of times button clicked:"+ (num++);

	// select the buttom which modify
	let  buttonDiv = document.getElementById("button-div");

	buttonDiv.innerHTML = newText;

}