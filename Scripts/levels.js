
function level1()
{

	var p = document.createElement(p);
	p.innerHTML = "Level 1";
	p.id = "level";
	document.body.appendChild(p);

	addAudio();
	document.body.style.backgroundColor = "red";
	changeBackground();
	var divs = Array();
	divs.push(createDiv(45, 2, "black", 25, 0)); // first platform: d = 6
	divs.push(createDiv(25, 2, "red", 75, 35));
	divs.push(createDiv(45, 2, "black", 45, 55));
	divs.push(createDiv(65, 2, "red", 95, 0)); //the star is here
	divs[0].id = "character-div";
	divs[divs.length - 1].id = "star-div";
	putStar(90, 10);
	putCharacter(20, 2);
	hideStar();
	moveCharacter(character);
}


function level2()
{
	var p = document.createElement(p);
	p.innerHTML = "Level 2";
	p.id = "level";
	document.body.appendChild(p);
	addAudio();
	document.body.style.backgroundColor = "black";
	changeBackground();
	var divs = Array();
	divs.push(createDiv(30, 2, "red", 25, 35)); //first platform -> character is here
	divs.push(createDiv(30, 2, "black", 45, 45));
	divs.push(createDiv(30, 2, "red", 75, 35));
	divs.push(createDiv(30, 2, "black", 95, 40)); //the star is here
	divs[0].id = "character-div";
	divs[divs.length - 1].id = "star-div";
	putStar(90, 50);
	putCharacter(20, 36);
	hideStar();
	checkDivColor();
	moveCharacter(character);
	// return 2;
}


function level3()
{

	var p = document.createElement(p);
	p.innerHTML = "Level 3";
	p.id = "level";
	document.body.appendChild(p);
	addAudio();
	document.body.style.backgroundColor = "black";
	changeBackground();
	var divs = Array();
	divs.push(createDiv(25, 2, "red", 15, 15)); //the character is here
	divs.push(createDiv(25, 2, "black", 75, 35));
	divs.push(createDiv(25, 2, "red", 55, 15));
	divs.push(createDiv(25, 2, "black", 35, 35));
	divs.push(createDiv(25, 2, "black", 17, 15)); //the character is here
	divs.push(createDiv(25, 2, "red", 95, 15)); //the star is here
	divs[divs.length - 1].id = "star-div";
	divs[0].id = "character-div";
	putCharacter(10, 25);
	putStar(90, 22);
	moveCharacter(character);

	// return 3;
}