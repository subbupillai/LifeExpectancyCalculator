var n;
var yr;
var sex;
var age;
var life;
var life_m=0;
var id;
var counter=0;
var month=0;
var q=0;
var r=0;
 var p;    
var pl;
var d;
var s;
var drnk;
var db;
var hb;
var lb;
var ob; 	var f; 	var det; 
var j;
var jh;
var sl;
var st;
function setLife()
{
	if(document.General.sex[0].checked==true)
	{		
		life=parseInt(77);
	document.getElementById("show").innerHTML="Male's normal Life Expectancy is "+life+" years ";
		sex="male";
	}
	if(document.General.sex[1].checked==true)
	{
		life=parseInt(81);
	document.getElementById("show").innerHTML="Female's normal Life Expectancy is "+life+" years ";
		sex="female";
	}
	
	document.cookie="gender="+escape(sex);
}

function validateGeneral()
{
	
	 n=General.name.value;
	 yr=General.year.value;
	
	if(document.General.sex[0].checked==true)
	{
		sex="male";
	}
	if(document.General.sex[1].checked==true)
	{
		sex="female";
	}
	if(!(document.General.sex[0].checked||document.General.sex[1].checked))
	{
		alert("You are requested to complete the requirements");
		return false;
	}
	if(n==""||n==null)
	{
	alert("Field must not be empty");
	return false;
	}
	if(yr.length!=4)
	{
		alert("Invalid birth year");
		General.year.focus();
		return false;
	}
	if(yr==""||yr==null)
	{
	alert("Field must not be empty");
	General.year.focus();
	return false;	
	}
	 if(isNaN(yr)==true)
	{
		alert("Enter a valide birth year");
		return false;
	}
	  if(parseInt(yr)>2016)
        {
            alert("Your age is too low to check");
            return false;
        }
        if(parseInt(yr)<1915)
        {
            alert("Birth year not acceptable");
            return false;
        }
	
	var currYear = new Date();
	age=currYear.getFullYear()-parseInt(yr);
	document.cookie="name="+escape(n);
	document.cookie="year="+escape(yr);
	
	return true;

}

function count(id)
{
   	counter++;
	
}
function checkCompletion()
{
   	 if(counter<10)
        {
        alert("Complete the requirements to proceed");
        return false;
        }

	if(document.get_details.place[0].checked==true)
	{
		p="urban";
		document.cookie="place="+escape(p); 
	}
	
	if(document.get_details.smoke[0].checked==true)
	{
		s="yes";
		document.cookie="smoke="+escape(s); 
	}
	if(document.get_details.drink[0].checked==true)
	{
		drnk="yes";
		document.cookie="drink="+escape(drnk); 
	}
	if(document.get_details.diabetes[0].checked==true)
	{
		db="yes";
		document.cookie="diabetes="+escape(db); 
	} 
	if(document.get_details.hbp[0].checked==true)
	{
		hb="yes";
		document.cookie="hbp="+escape(hb); 
	} 			
	if(document.get_details.lbp[0].checked==true)
	{
		lb="yes";
		document.cookie="lbp="+escape(lb); 
	}
	
	
	if(document.get_details.fast[0].checked==true)
	{
		f="yes";
		document.cookie="fast="+escape(f); 
	}
	if(document.get_details.diet[1].checked==true)
	{
		det="yes";
		document.cookie="diet="+escape(det); 
	}

	
	if(document.get_details.sleep[1].checked==true){
		sl="normal";
		document.cookie="sleep="+escape(sl); }
	else if(document.get_details.sleep[0].checked==true){
		sl="low";
		document.cookie="sleep="+escape(sl); }

	if(document.get_details.stress[0].checked==true){
		st="high";
		document.cookie="stress="+escape(st);}
	else if(document.get_details.stress[2].checked==true){
		 st="medium";
		document.cookie="stress="+escape(st); }

	

	
        return true;
}
function processData()
{
	var x= document.cookie.match("name" + "=(.*?)(;|$)");
	if(x)
	x=unescape(x[1]);
	document.getElementById("showName").innerHTML=x;
	var year= document.cookie.match("year" + "=(.*?)(;|$)");
	if(year)
	year=unescape(year[1]);
	var currYear = new Date();
	age=currYear.getFullYear()-parseInt(year);
	document.getElementById("showAge").innerHTML=age;

	var gender= document.cookie.match("gender" + "=(.*?)(;|$)");
	if(gender)
	gender=unescape(gender[1]);
	
	
	if(gender=="female")                           
        {
            if(age>parseInt(55) && age<=parseInt(75))
                life=85;
            if(age>75&&age<=85)
                life=90;
            if(age>90)
                life=age+15;
            else
              life = 81;  
        }
        else
        {
            if(age>55&&age<=75)
                life=83;
            if(age>75&&age<=85)
                life=88;
            if(age>90)
                life=age+15;
            else
                life = 77;
        }
	
	var place= document.cookie.match("place" + "=(.*?)(;|$)");
	if(place)
	life_m=life_m + 6;
	 var smoke= document.cookie.match("smoke" + "=(.*?)(;|$)");
	if(smoke){
	life = life-3;
	life_m=life_m+4
	}
	 var drink= document.cookie.match("drink" + "=(.*?)(;|$)");
	if(drink){
	life = life-3;
	}
	 var diabetes= document.cookie.match("diabetes" + "=(.*?)(;|$)");
	if(diabetes){
	life = life-3;
	}

	var hbp= document.cookie.match("hbp" + "=(.*?)(;|$)");
	if(hbp){
	life = life-3;
	}
	
	var lbp= document.cookie.match("lbp" + "=(.*?)(;|$)");
	if(lbp){
	life = life-4;
	}
	
	
	var fast= document.cookie.match("fast" + "=(.*?)(;|$)");
	var diet= document.cookie.match("diet" + "=(.*?)(;|$)");
	if(fast=="yes" && diet=="yes")
	{
		life=life-1;
                life_m=life_m+6;
	}
	
	var sleep= document.cookie.match("sleep" + "=(.*?)(;|$)");
	var stress= document.cookie.match("stress" + "=(.*?)(;|$)");
	 if((stress!=null)&&(sleep!=null))
        {
            if((sleep=="low")&&(stress=="high"))
                life=life - 4;
            if((sleep=="low")&&(stress=="medium"))
                life=life - 2;
            if((sleep=="normal")&&(stress=="high"))
                life=life - 2;
        }
	else
	{
		if(stress=="high")
                  life = life - 2;
              if(sleep=="low")
                  life = life - 2;
             
	}

	if(life<=(age+6))
        {
            life=age+7;
        }
        if((life==77)&& gender=="male")
        {
            life=75;
        }
         if((life==81)&& gender=="female")
        {
            life=80;
        }

        if(life_m!=0)
        {
            q = parseInt(life_m/12);
            r = parseInt(life_m%12);
            if(r!=0)
            {
                life=life-q-1;
                month=12-r;
            }
            else
            {
                life=life-q;
            }
        }
	document.getElementById("showLife").innerHTML=life + "  years";
	document.getElementById("showM").innerHTML= month + "  month(s)";
	
}

