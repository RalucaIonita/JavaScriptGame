function randomGenerator(min, max)
{
	return (Math.floor(Math.random() * (max - min + 1)) + min).toString(16);	
}

var width = $(window).width();
var height = $(window).height();
var colors = 
["#000000", "#080808", "#101010", "#181818", "#202020", "#282828",
"#303030", "#383838", "#404040", "#484848", "#505050", "#585858",
"#606060", "#696969", "#707070", "#787878", "#808080", "#888888",
"#909090", "#989898", "#A0A0A0", "#A8A8A8", "#A9A9A9", "#B0B0B0",
"#B8B8B8", "#BEBEBE", "#C0C0C0", "#C8C8C8", "#D0D0D0", "#D3D3D3",
"#D8D8D8", "#DCDCDC", "#E0E0E0", "#E8E8E8", "#F0F0F0", "#F5F5F5",
"#F8F8F8", "#FFFFFF"]
/*
setInterval(function()
{
	document.body.style.backgroundColor = colors[randomGenerator(0, 37)]
}, 500);
*/

//LEVEL 1

function createDiv(width, height, color, top, left)
{
	var div = document.createElement("div");
	div.style.width = width.toString() + "vw";
	div.style.height = height.toString() + "vh";
	div.style.position = "fixed";
	div.style.backgroundColor = color;
	div.style.top = top.toString() + "vh";
	div.style.left = left.toString() + "vw";
	document.body.appendChild(div);
	return div;
}

function putStar(top, left)
{
	var star = document.createElement("img");
	star.src = "Images/star.png";
	star.style.width = "25px";
	star.style.height = "25px";
	star.style.top = top.toString() + "vh";
	star.style.left = left.toString() + "vw";
	star.style.position = "relative";
	star.style.zIndex = 0;
	star.id = "star";
	document.body.appendChild(star);
}

function putCharacter(top, left)
{
	var character = document.createElement("img");
	character.src = "Images/character.png";
	character.style.width = "30px";
	character.style.height = "30px";
	character.style.top = top.toString() + "vh";
	character.style.left = left.toString() + "vw";
	character.style.position = "relative";
	character.style.zIndex = 15;
	character.id = "character";
	document.body.appendChild(character);
}





function putStuff(url, top, left, size, zIndex)
{
	var stuff = document.createElement("img");
	stuff.src = url;
	stuff.style.width = size.toString() + "px";
	stuff.style.height = size.toString() + "px";
	stuff.style.top = top.toString() + "vh";
	stuff.style.left = left.toString() + "vw";
	stuff.style.position = "relative";
	stuff.style.zIndex = zIndex;
	document.body.appendChild(stuff);

	return stuff;
}




function changeBackground()
{
	document.addEventListener("keydown", function(event) {
	if(event.keyCode == 32)
	{
		console.log("*");
		console.log(document.body.style.backgroundColor);
		if(document.body.style.backgroundColor === "red"){
		document.body.style.backgroundColor = "black";
	}
	else{
		document.body.style.backgroundColor = "red";
	}
	}
 });

}


function level1()
{
	document.body.style.backgroundColor = "red";
	changeBackground();
	var divs = Array();
	divs.push(createDiv(25, 2, "red", 75, 35));
	divs.push(createDiv(45, 2, "black", 45, 55));
	divs.push(createDiv(65, 2, "red", 95, 0));
	divs.push(createDiv(45, 2, "black", 25, 0));
	putStuff("Images/star.png", 0, 0, 25, 0);
	putStuff("Images/character.png", 0, 0, 30, 999);
}


function level2()
{
	document.body.style.backgroundColor = "black";
	changeBackground();
	var divs = Array();
	divs.push(createDiv(30, 2, "red", 25, 35));
	divs.push(createDiv(30, 2, "black", 42, 35));
	divs.push(createDiv(30, 2, "red", 59, 35));
	divs.push(createDiv(30, 2, "black", 93, 35));
	putStuff("Images/star.png", 87, 50, 25, 0);
	putStuff("Images/character.png", 19, 30, 30);
}


function level3()
{
	document.body.style.backgroundColor = "black";
	changeBackground();
	var divs = Array();
	divs.push(createDiv(25, 2, "red", 95, 15));
	divs.push(createDiv(25, 2, "black", 75, 50));
	divs.push(createDiv(25, 2, "red", 55, 15));
	divs.push(createDiv(25, 2, "black", 35, 50));
	divs.push(createDiv(25, 2, "red", 15, 15));
	divs.push(createDiv(25, 2, "black", 5, 50));
	putStar(9, 15);
	putCharacter(89, 8);
	moveCharacter(character);
}


//hide the star


level3();



            function leftArrowPressed() {
            var element = document.getElementById("character");
            element.style.left = parseInt(element.style.left) - 20 + 'vw';
            }

            function rightArrowPressed() {
            var element = document.getElementById("character");
            element.style.left = parseInt(element.style.left) + 20 + 'vw';

            }

            function upArrowPressed() {
            var element = document.getElementById("character");
            element.style.top = parseInt(element.style.top) - 20 + 'vh';
            }

            function downArrowPressed() {
            var element = document.getElementById("character");
            element.style.top = parseInt(element.style.top) +  20 + 'vh';
            }





function moveCharacter(character)
{
	document.addEventListener("keydown", function(event) {
		console.log(event.keyCode);

	 switch (event.keyCode) {
	 	case 37:
          	leftArrowPressed();
           	break;
        case 39:
           	rightArrowPressed();
           	break;
        case 38:
           	upArrowPressed();
           	break;
        case 40:
           	downArrowPressed();
           	break;}

	});
}

//moveCharacter();