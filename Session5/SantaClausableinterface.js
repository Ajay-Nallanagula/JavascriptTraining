//http://www.codewars.com/kata/santaclausable-interface
function isSantaClausable(obj) {
    return !!((obj.sayHoHoHo && typeof obj.sayHoHoHo == "function") && (obj.distributeGifts && typeof obj.distributeGifts == "function") && (obj.goDownTheChimney && typeof obj.goDownTheChimney == "function"));
}