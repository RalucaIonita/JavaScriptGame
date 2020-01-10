function calculateCurrentPlatform()
{
	var platforms = document.getElementsByTagName("div");
	var character = document.getElementById("character");

	// var minTopDistance = 15215;
	var minDistancePlatform = -1;
	for(var i = 0; i < platforms.length; i++)
	{
		var currentDistance = parseInt(platforms[i].style.top) - parseInt(character.style.top);
		//console.log("CurrentDistantce: " + currentDistance);
		if (currentDistance == 5 && currentDistance > 0)
		{
			minDistancePlatform = platforms[i];
		}

	}
	return minDistancePlatform;
}



function stepsCollision(currentPlatform)
{
	var character = document.getElementById("character");
		if (currentPlatform != -1)
		{
			var intervalLeft = parseInt(currentPlatform.style.left);
			var intervalRight = parseInt(currentPlatform.style.left) + parseInt(currentPlatform.style.width);
			if(parseInt(character.style.left) <= intervalLeft || parseInt(character.style.left) >= intervalRight)
				characterFall();
		}
		else
			characterFall();
}

function gravity()
{
	var character = document.getElementById("character");
	console.log(character.style.top);
	// characterFall();
	//console.log("*");
	var currentPlatform = calculateCurrentPlatform();
	console.log(currentPlatform);
	if(currentPlatform != -1)
	{
		stepsCollision(currentPlatform);
		return;
	}
	else{
			if(searchMaxTop() > parseInt(character.style.top))
				{
					console.log("+");
				//stepsCollision();
					characterFall();
			}
			else
					{
						alert("You died.");
						lostGame();
						return;
					}

		gravity();
		}
}




function searchMaxTop()
{
	var platforms = document.getElementsByTagName("div");
	var maxTop = 0;
	for(i = 0; i < platforms.length; i++)
	{
		var currentTop = parseInt(platforms[i].style.top);
		if (currentTop > maxTop)
		{
			maxTop = currentTop;
		}
	}
	return maxTop;
}


function searchClosestPlatform()
{
	var platforms = document.getElementsByTagName("div");
	var character = document.getElementById("character");
	console.log("X");

	var minTopDistance = -15215;
	var minDistancePlatform = -1;
	for(var i = 0; i < platforms.length; i++)
	{
		var currentDistance = parseInt(platforms[i].style.top) - parseInt(character.style.top);
		console.log("Current top distance" + currentDistance);
		if (currentDistance > minTopDistance && currentDistance <= 0)
		{
			minDistancePlatform = platforms[i];
		}
	}
	return minDistancePlatform;

}








/////uppser collsion

function hitYourHead()
{
	var character = document.getElementById("character");
	var characterTop = parseInt(character.style.top);
	var closestPlatform = searchClosestPlatform();
	// console.log(closestPlatform.style.top);
	if(closestPlatform != -1 && (parseInt(closestPlatform.style.top) == characterTop + 2))
		return 1;
	else
		return 0;
}

