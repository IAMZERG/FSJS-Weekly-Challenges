//create function
function response(entry) {

  //control and return statements
  if (entry === "Hello") {
    alert("Hello World!");
  } else{
    alert("Unrecognized Response");
  }
}

//Prompt user for input and store variable
var p = prompt("Greetings!  Hope you are doing well...");


//Call function
response(p);

//Alert user results
