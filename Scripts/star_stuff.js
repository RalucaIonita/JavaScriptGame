
function putStar(top, left)
{
    var star = document.createElement("img");
    star.src = "Images/star.png";
    star.style.width = "25px";
    star.style.height = "25px";
    star.style.top = top.toString() + "vh";
    star.style.left = left.toString() + "vw";
    star.style.position = "absolute";
    star.style.zIndex = "-1";
    star.id = "star";
    document.body.appendChild(star);
}



function checkCollectedStar()
{
    character = document.getElementById("character");
    star = document.getElementById("star");

    // console.log(star.style.top);
    // console.log(character.style.top);

    if(parseInt(character.style.left) + 5 == parseInt(star.style.left) && parseInt(character.style.top) == parseInt(star.style.top))
    {
        alert("You won.");

        var button = document.createElement("button");
        button.innerHTML = "Next level";
        document.body.appendChild("button");

        //eventlistener for click
    }

}



function hideStar()
{
    var starDivColor = document.getElementById("star-div").style.backgroundColor;
    var backgroundColor = document.body.style.backgroundColor;

    var star = document.getElementById("star");
    if (starDivColor === backgroundColor && star.style.display != 'none')
            star.style.display= "none";
    else
            star.style.display = "block";
}


// function starCollision() //get back to this shit
// {
//     var star = document.getElementById("star");
//     var heightStartPoint = parseInt(star.style.top) * 6.5; 
//     var widthStartPoint = parseInt(star.style.left) * 5.81;
//     var starHeight = parseInt(star.style.height);
//     var starWidth = parseInt(star.style.width);
    
//     var starHeightRange = [heightStartPoint, heightStartPoint + starHeight];
//     var starWidthRange = [widthStartPoint, widthStartPoint + starWidth];


//     console.log(starHeightRange);
//     console.log(starWidthRange);
//     for( i = 0; i < parseInt(star); i++)
//     {

//     }

//}