//http://www.codewars.com/kata/a-function-within-a-function
function always(n) {
    return function innerAlways() {
        return n;
    }
}