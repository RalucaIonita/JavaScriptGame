function randomGenerator(min, max)
{
    return (Math.floor(Math.random() * (max - min + 1)) + min).toString(16);    
}

function setHomePage()
{
	//console.log("x");
    var colors = ["#080808", "#101010", "#181818", "#202020", "#282828",
    "#303030", "#383838", "#404040", "#484848", "#505050", "#585858",
    "#606060", "#696969", "#707070", "#787878", "#808080", "#888888",
    "#909090", "#989898", "#A0A0A0", "#A8A8A8", "#A9A9A9", "#B0B0B0",
    "#B8B8B8", "#BEBEBE", "#C0C0C0", "#C8C8C8", "#D0D0D0", "#D3D3D3",
    "#D8D8D8", "#DCDCDC", "#E0E0E0", "#E8E8E8", "#F0F0F0", "#F5F5F5",
    "#F8F8F8", "#FFFFFF"];
    someNumber = parseInt(randomGenerator(200, 500));
    while(isNaN(someNumber))
    {
    	someNumber = parseInt(randomGenerator(200, 500));
    }
    console.log(someNumber);
    
    for(i = 0; i <= someNumber; i++)
    {
    	putCharacter(randomGenerator(0, 155), randomGenerator(0, 125));
	    putStar(randomGenerator(0, 155), randomGenerator(0, 125));
    }

  //   setInterval(function()
		// {
		// 	document.body.style.backgroundColor = colors[randomGenerator(0, 36)];
		// }, 500);

   return colors;

}
