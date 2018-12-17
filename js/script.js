//This is a function that gets input from 3 text boxes and checks:
//1. If the values can make a triange
//2. What type of triangle they can make
function makeTriangle()
{
//Declaration of an array that will contain the 3 values
  var triangle =[sideA,sideB,sideC]
  triangle[0]=parseInt(document.getElementById("sideA").value);
  triangle[1]=parseInt(document.getElementById("sideB").value);
  triangle[2]=parseInt(document.getElementById("sideC").value);

    if(( triangle[0]+ triangle[1])> triangle[2] && ( triangle[1] +  triangle[2])> triangle[0] && ( triangle[0] +  triangle[2])> triangle[1])
    {
       alert("Sides A, B, C make a Triangle");
    if( triangle[0]=== triangle[1] &&  triangle[1]=== triangle[2] &&  triangle[2]=== triangle[0])
         {

            alert("The triangle is an EQUILATERAL Triangle");        }
    else if(( triangle[0] ===  triangle[1])||( triangle[1] ===  triangle[2])||( triangle[2] ===  triangle[0]))
      {
        alert("The triangle is an ISOSCELES Triangle");
      }
       else 
      {        
        alert("The triangle is an SCALENE Triangle");
      }
    }
     
    // This is the end of the condition for a triangle and its nested conditions for each type of triangle
    else
     {
     alert("Sides A, B and C cannot make triangle"); 
      }
 }; 