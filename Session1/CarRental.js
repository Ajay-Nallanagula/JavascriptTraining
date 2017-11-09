//http://www.codewars.com/kata/transportation-on-vacation
function rentalCarCost(vacationDays) {
    var rent;
    var calc = vacationDays * 40;
    if (vacationDays >= 7) {
        rent = calc - 50;
    } else if (vacationDays >= 3) {
        rent = calc - 20;
    } else {
        rent = calc;
    }
    return rent;
}
