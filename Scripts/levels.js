
function level1()
{
	document.body.style.backgroundColor = "red";
	changeBackground();
	var divs = Array();
	divs.push(createDiv(25, 2, "red", 75, 35));
	divs.push(createDiv(45, 2, "black", 45, 55));
	divs.push(createDiv(45, 2, "black", 25, 0)); // first platform: d = 6
	divs.push(createDiv(65, 2, "red", 95, 0)); //the star is here
	divs[divs.length - 1].id = "star-div";
	putStar(91, 2);
	putCharacter(21, 2);
	// calculateCurrentPlatform();
	// starCollision();
	hideStar();
	moveCharacter(character);
	gravity();
}


function level2()
{
	document.body.style.backgroundColor = "black";
	changeBackground();
	var divs = Array();
	divs.push(createDiv(30, 2, "red", 25, 35)); //first platform
	divs.push(createDiv(30, 2, "black", 42, 35));
	divs.push(createDiv(30, 2, "red", 59, 35));
	divs.push(createDiv(30, 2, "black", 93, 35)); //the star is here
	divs[divs.length - 1].id = "star-div";
	putStar(87, 50);
	putCharacter(19, 30);
	starCollision();
	moveCharacter(character);
}


function level3()
{
	document.body.style.backgroundColor = "black";
	changeBackground();
	var divs = Array();
	divs.push(createDiv(25, 2, "red", 95, 15)); //first platform
	divs.push(createDiv(25, 2, "black", 75, 50));
	divs.push(createDiv(25, 2, "red", 55, 15));
	divs.push(createDiv(25, 2, "black", 35, 50));
	divs.push(createDiv(25, 2, "red", 15, 15)); //the star is here
	divs[divs.length - 1].id = "star-div";
	putStar(9, 15);
	starCollision();
	putCharacter(89, 10);
	moveCharacter(character);
	
}


// function prepareCanvas()
// {
// 	var canvas = document.createElement("canvas");
// 	canvas.id = "canvas";
// 	canvas.style.height = "400px";
// 	canvas.style.width = "400px";
// 	canvas.style.border = "1px solid black";
// 	document.body.appendChild(canvas);
// }


// function drawPlatform(x0, y0, x1, y1, color)
// {
// 	var canvas = document.getElementById("canvas");
// 	var canvasContext = canvas.getContext("2d");

// 	canvasContext.moveTo(x0, y0);
// 	canvasContext.lineTo(x1, y1);
// 	canvasContext.strokeStyle = color;
// 	canvasContext.stroke();
// }






// function level1()
// {
// 	var canvas = document.getElementById("canvas");
// 	canvas.style.backgroundColor = "red";

// 	var canvasContext = canvas.getContext("2d");

// 	var platforms = Array();

// 	var platform = {
// 		x0 : 0,
// 		y0 : 20,
// 		x1 : 100,
// 		y1 : 20,
// 		color: "black"
// 	};
// 	platforms.push(platform);
// 	drawPlatform(platform.x0, platform.y0, platform.x1, platform.y1, platform.color);

// 	// canvasContext.moveTo(399, 50);
// 	// canvasContext.lineTo(150, 50);
// 	// canvasContext.strokeStyle = "red";
// 	// canvasContext.stroke();
// 	var platform = {
// 		x0 : 100,
// 		y0 : 100,
// 		x1 : 100,
// 		y1 : 20,
// 		color: "red"
// 	};
// 	platforms.push(platform);
// 	drawPlatform(platform.x0, platform.y0, platform.x1, platform.y1, platform.color);








// }


// function drawOnCanvas()
// {
// 	var canvas = document.getElementById("canvas");
// 	var canvasContext = canvas.getContext("2d");
// 	canvasContext.moveTo(0, 20);
// 	canvasContext.lineTo(100, 20);
// 	canvasContext.stroke();


// 	//var character = document.createElement("img");
// 	var character = new Image();
// 	character.src = "Images/character.png";
// 	character.width = "30px";
// 	character.height = "30px";
// 	character.id = "character";
// 	// document.body.appendChild(character);

// window.onload = function() {
// 	canvasContext.drawImage(character, 0, 5, 30, 15);

// 	//line.y == character.y + character.height
// }
// 	// canvasContext.stroke();

// }