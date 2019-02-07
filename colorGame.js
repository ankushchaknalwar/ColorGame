var numSquares=6;
var h1=document.querySelector("h1");
var colors=generateRandomColors(numSquares);
var square=document.querySelectorAll(".Square");
var pickedColor=colors[pickedcolor()];
var rgbDisplay=document.getElementById("rgbDisplay");
var messageDisplay=document.getElementById("message");
var reset=document.querySelector("#reset")
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");


easy.addEventListener("click",function(){
	reset.textContent="New Colors";
	messageDisplay.textContent=" ";
	h1.style.background="steelblue";
	hard.classList.remove("selected")
	this.classList.add("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=colors[pickedcolor()];
    rgbDisplay.textContent=pickedColor;
    for(var i=0;i<square.length;i++)
    {
    	if(colors[i])
    	{
    		square[i].style.backgroundColor=colors[i];
    	}else
    	{
    		square[i].style.display="none"
    	}
    }
})

hard.addEventListener("click",function(){
    reset.textContent="New Colors";
    messageDisplay.textContent=" ";
    h1.style.background="steelblue";
	easy.classList.remove("selected")
	this.classList.add("selected");
	numSquares=6;
    colors=generateRandomColors(numSquares);
	pickedColor=colors[pickedcolor()];
    rgbDisplay.textContent=pickedColor;
    for(var i=0;i<square.length;i++)
    {
    	
    		square[i].style.backgroundColor=colors[i];
    	
    		square[i].style.display="block";
    	
    }
    
})
rgbDisplay.textContent=pickedColor;
var i=0
for(i=0;i<square.length;i++)
{
	square[i].style.backgroundColor=colors[i];
}

for(i=0;i<square.length;i++)
{
	square[i].addEventListener("click",function()
	{
		var clickedcolor=this.style.backgroundColor;
	
		if(clickedcolor===pickedColor)
			{messageDisplay.textContent="Correct!!!";
	         changeColor(pickedColor);
	         h1.style.background=pickedColor;
	         reset.textContent="Play Again?"}
		else
			{this.style.backgroundColor="#232323";
             messageDisplay.textContent="Try Again";
			}
	})
}

function changeColor(color)
{
	for(i=0;i<square.length;i++)
	{
       square[i].style.backgroundColor=color;
	}
      
}



function generateRandomColors(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
      arr.push(randomColor());
	}

	return arr;
}

function pickedcolor()
{  console.log(colors.length)
	return Math.floor(Math.random()*colors.length);
}

function randomColor()
{
 var r=Math.floor(Math.random()*256);
 var g=Math.floor(Math.random()*256);
 var b=Math.floor(Math.random()*256);
 return "rgb("+r+", "+g+", "+b+")"
}


reset.addEventListener("click",function()
{  if(numSquares==6)
	{this.textContent="New Colors"
	colors=generateRandomColors(6);
	pickedColor=colors[pickedcolor()];
	for(i=0;i<square.length;i++)
{
	square[i].style.backgroundColor=colors[i];
}
h1.style.background="steelblue"

	rgbDisplay.textContent=pickedColor;
	messageDisplay.textContent=" ";
}else{
	this.textContent="New Colors"
	colors=generateRandomColors(3);
	pickedColor=colors[pickedcolor()];
	rgbDisplay.textContent=pickedColor;
	messageDisplay.textContent=" ";
	h1.style.background="steelblue"
	for(i=0;i<square.length;i++)
{
	square[i].style.backgroundColor=colors[i];
}
}
})