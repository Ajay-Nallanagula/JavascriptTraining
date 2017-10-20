
//http://www.codewars.com/kata/opposite-number
function opposite(numb) {
var errMsg = "Recheck your input, please type a number";
return isNaN(numb) ? errMsg : (parseInt(numb) === 0 ? 0 : -numb);
}
