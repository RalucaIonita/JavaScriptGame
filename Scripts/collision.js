function calculateCurrentPlatform()
{
	var platforms = document.getElementsByTagName("div");
	var character = document.getElementById("character");

	// console.log(platforms.length);
	var minTopDistance = 15215;
	var minDistancePlatform = -1;
	for(var i = 0; i < platforms.length; i++)
	{
		var currentDistance = parseInt(platforms[i].style.top) - parseInt(character.style.top);
		// console.log(currentDistance);
		// console.log("*****");
		// console.log(minTopDistance);

		if (currentDistance < minTopDistance && currentDistance <= 8 && currentDistance >= 0)
		{
			minTopDistance = currentDistance;
			minDistancePlatform = platforms[i];
			// console.log("**");
		}

	}
	// console.log(minTopDistance);
	return minDistancePlatform;
}



function stepsCollision()
{
	//var platforms = document.getElememntsByTagName("platform");
	var character = document.getElementById("character");
		currentPlatform = calculateCurrentPlatform();
		if (currentPlatform != null)
		{
			var intervalLeft = parseInt(currentPlatform.style.left);
			var intervalRight = parseInt(currentPlatform.style.left) + parseInt(currentPlatform.style.width);
			console.log(currentPlatform.style.width);
			console.log(intervalLeft);
			console.log(character.style.left)
			if(parseInt(character.style.left) < intervalLeft || parseInt(character.style.left) > intervalRight - 1)
				character.style.top = (parseInt(character.style.top) + 18).toString() + "vh";
			console.log(character.style.top);
		}
		else
			character.style.top = (parseInt(character.style.top) + 18).toString() + "vh";	
}

function gravity()
{
	var character = document.getElementById("character");
	while(calculateCurrentPlatform() == undefined)
	{
		character.style.top = (parseInt(character.style.top) + 15).toString() + "vh";

	}
}