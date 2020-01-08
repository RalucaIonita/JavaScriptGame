
function createDiv(width, height, color, top, left)
{
    var div = document.createElement("div");
    div.style.width = width.toString() + "vw";
    div.style.height = height.toString() + "vh";
    div.style.position = "fixed";
    div.style.backgroundColor = color;
    div.style.top = top.toString() + "vh";
    div.style.left = left.toString() + "vw";
   // div.class = "platform";
    document.body.appendChild(div);
    return div;
}






function leftArrowPressed()
{
    var element = document.getElementById("character");
    if(parseInt(element.style.left) >= -1)
       	element.style.left = parseInt(element.style.left) - 1 + 'vw';
}


function rightArrowPressed()
{
    var element = document.getElementById("character");
    if(parseInt(element.style.left) <= 78)
        element.style.left = parseInt(element.style.left) + 1 + 'vw';
}


function upArrowPressed()
{
    var element = document.getElementById("character");
    if(parseInt(element.style.top) >= 10)
      	element.style.top = parseInt(element.style.top) - 2 + 'vh';
}


function downArrowPressed()
{
    var element = document.getElementById("character");
    if(parseInt(element.style.top) <= 88)
      	element.style.top = parseInt(element.style.top) +  2 + 'vh';
}





function changeBackground()
{
    document.addEventListener("keydown", function(event) {
        if(event.keyCode == 32)
        {
            if(document.body.style.backgroundColor === "red")
                document.body.style.backgroundColor = "black";
            else
                document.body.style.backgroundColor = "red";
            hideStar();
        }
    });
}






///////////////////////////////////////////////////////////////////////////////////////////


function addAudio()
{
    var sound = document.createElement('audio');
    sound.id = 'audio';
    sound.style.display = "none";
    sound.autoplay = "autoplay";
    sound.controls = 'controls';
    sound.src = 'Sounds/soundtrack.mp3';
    sound.type = 'audio/mp3';
    sound.loop = "loop";
    document.body.appendChild(sound);
}





//GRAVITYYYYYYYY

