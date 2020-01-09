addVideo();
createForm();
var colors = setHomePage();
var level = 1;

var interval = setInterval(function(event)
		{
			document.body.style.backgroundColor = colors[randomGenerator(0, 36)];
		}, 500);


var submit = document.getElementById("submit");
submit.addEventListener("click", function(event)
{
	clearInterval(interval);
	if(validatePassword())
		{
			document.body.innerHTML = "";
			level1();
		};
});