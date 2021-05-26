/*Create a function that takes two arguments. Both arguments are integers, a and b. Return true if
one of them is 10 or if their sum is 10
Ex: makesTen(9, 10) ➞ true, makesTen(9, 9) ➞ false, makesTen(1, 9) ➞ true */


function tens() {
    a=Number(prompt("enter 1st number"));
    b=Number(prompt("enter 2nd number"));
    if (a == 10 || b == 10 || a + b == 10) {
        document.getElementById("i9").innerHTML= "Makes ten--->true";
    } else {
        document.getElementById("i9").innerHTML= "Doesnt make ten----->false";
    }
}