
//http://www.codewars.com/kata/opposite-number
var numb = prompt("Please enter a number");
var errMsg = "Recheck your input, please type a number";
console.log(isNaN(numb) ? errMsg : (parseInt(numb) === 0 ? 0 : -numb));