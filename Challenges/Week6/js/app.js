//#Week 6 JQuery Code Challenge

//Objects
		
//Code Challenge:
//Create an object named "Box" with 3 properties, height, width, volume.
function Box (height, width, volume) {
	this.height = height;
	this.width = width;
	this.volume = volume;
}

//Create 2 buttons for Height. The first button decreases the Box Height by 1. The second button increases the Box Height by 1.

jQuery("#WidthIncrease").click(function (e) {

	//retrieve width from the test box
	var value = parseInt(jQuery(".box.box-test").css("width")) + 1 + "px";

	//change width of test box
	jQuery(".box.box-test").css("width", value);

});

jQuery("#WidthDecrease").click(function (e) {

	//retrieve width from the test box
	var value = parseInt(jQuery(".box.box-test").css("width")) - 1 + "px";

	//change width of test box
	jQuery(".box.box-test").css("width", value);

});

jQuery("#HeightIncrease").click(function (e) {

	//retrieve width from the test box
	var value = parseInt(jQuery(".box.box-test").css("height")) + 1 + "px";

	//change width of test box
	jQuery(".box.box-test").css("height", value);

});

jQuery("#HeightDecrease").click(function (e) {

	//retrieve width from the test box
	var value = parseInt(jQuery(".box.box-test").css("height")) - 1 + "px";

	//change width of test box
	jQuery(".box.box-test").css("height", value);

});



jQuery("#HeightDecrease").click(function (e) {

	//retrieve width from the test box
	var value = parseInt(jQuery(".box.box-test").css("height")) - 1 + "px";

	//change width of test box
	jQuery(".box.box-test").css("height", value);

});

jQuery("#VolumeIncrease").click(function (e) {

	//retrieve width from the test box
	var height = parseInt(jQuery(".box.box-test").css("height")) + 1 + "px";
	var width = parseInt(jQuery(".box.box-test").css("width")) + 1 + "px";
	//change width of test box
	jQuery(".box.box-test").css("height", height);
	jQuery(".box.box-test").css("width", width);

});

jQuery("#VolumeDecrease").click(function (e) {

	//retrieve width from the test box
	var height = parseInt(jQuery(".box.box-test").css("height")) - 1 + "px";
	var width = parseInt(jQuery(".box.box-test").css("width")) - 1 + "px";
	//change width of test box
	jQuery(".box.box-test").css("height", height);
	jQuery(".box.box-test").css("width", width);

});
//Create a button that prints the object and its attributes to the page (use the span "output".

jQuery("#Print").click(function (e) {
	alert("Ship it!");
	jQuery(".box.box-test").removeClass("box-test").addClass("box-production").appendTo("#output");
	jQuery(".boxView").append('<div class="box box-test"></div>');

});
 
//Extra credit
//Create interactive buttons to decrease or increase the Width and Volume
