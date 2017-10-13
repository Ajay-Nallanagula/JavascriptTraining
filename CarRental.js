
//http://www.codewars.com/kata/transportation-on-vacation
function rentalCarCost(vacationDays) {
  var rent;
if(vacationDays >= 7){
rent = (vacationDays*40) - 50;
}else if(vacationDays >= 3){
rent = (vacationDays*40) - 20;
}else{
rent = vacationDays*40;
}
return rent;//"$"+rent;
}

console.log(carRental(2));
