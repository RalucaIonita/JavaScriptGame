
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

    if(parseInt(character.style.left) == parseInt(star.style.left) && parseInt(character.style.top) == parseInt(star.style.top))
    {

        alert("You won.");
        var p = document.getElementById("level");
        var level = p.innerHTML;
        // la primul case e problema
        switch(level) {
            case "Level 1":
                document.body.innerHTML = "";
                document.body = level2();
                break;
            case "Level 2":
                document.body.innerHTML = "";
                document.body = level3();
                break;
            case "Level 3":
                document.body.innerHTML = "";
                document.body = gameEnded();
                break;
        }
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
