/*Create a function that takes the number of wins, draws and losses and calculates the number of points a football team
 has obtained so far.

 wins get 3 points
draws get 1 point
losses get 0 points
Ex: footballPoints(3, 4, 2) ➞ 13
footballPoints(5, 0, 2) ➞ 15*/

function wins() {
    win=prompt("enter wins");
    draw=prompt("enter draws");
    loss=prompt("enter loss");
    document.getElementById("i8").innerHTML= (win * 3) + (draw * 1) + (loss * 0)+" points";
}

