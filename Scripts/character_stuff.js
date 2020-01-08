function putCharacter(top, left)
{
	var character = document.createElement("img");
	character.src = "Images/character.png";
	character.style.width = "30px";
	character.style.height = "30px";
	character.style.top = top.toString() + "vh";
	character.style.left = left.toString() + "vw";
	character.style.position = "absolute";
	character.style.zIndex = "0";
	character.id = "character";
	document.body.appendChild(character);
}




function moveCharacter(character)
{
	document.addEventListener("keydown", function(event) {
		stepsCollision();
	// starCollision();
	checkCollectedStar();
	console.log(character.style.top);

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
        // case 40:
        //    	downArrowPressed();
        //    	break;
    }

	});
}

