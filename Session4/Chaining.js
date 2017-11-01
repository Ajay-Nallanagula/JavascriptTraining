//-	http://www.codewars.com/kata/a-chain-adding-function
function add(n) {

    var func = function addAgain(numb2) {
        return add(n + numb2);
    };
    func.valueOf = func.toString = function() {
        return n;
    }
    return func;
}