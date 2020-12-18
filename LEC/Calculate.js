
var life;
function setLife()
{
	if(document.General.sex[0].checked==true)
	{		
		life=parseInt(77);
	document.getElementById("show").innerHTML="Male's normal Life Expectancy is "+life+" years";
	}
	if(document.General.sex[1].checked==true)
	{
		life=parseInt(81);
	document.getElementById("show").innerHTML="Female's normal Life Expectancy is "+life+" years";
	}
}




