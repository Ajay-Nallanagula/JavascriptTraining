
//http://www.codewars.com/kata/transportation-on-vacation
var carRental = function(vacationDays){
var rent;
if(vacationDays >= 7){
rent = (vacationDays*7*40) - 50;
}else if(vacationDays >= 3){
rent = (vacationDays*3*40) - 20;
}else{
rent = vacationDays*40;
}
return "$"+rent;
}

console.log(carRental(2));