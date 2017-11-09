//Way 1: http://www.codewars.com/kata/closures-and-scopes/train/javascript
function createFunctions(n) {
    var callbacks, i, elem;
    callbacks = [];
    for (i = 0; i < n; i++) {
        callbacks.push((function innFunc(i) {
            return function innerMostFunc() {
                return i;
            };
        })(i));
    }
    return callbacks;
}







//Way 3:
/*function createFunctions(n) {
    var callbacks, i, elem;
    callbacks = [];
    for (i = 0; i < n; i++) {
        callbacks.push((function innFunc(i) {
            return function innerMostFunc() {
                return i;
            };
        })(i));
    }
    return callbacks;
}*/



/*
//Way 2 : 
function createFunctions(n) {
    var callbacks = [];
    for (let i = 0; i < n; i++) {
        var f = function innFunc() {
            return i;
        };
        callbacks.push(f);
    }
    return callbacks;
}
*/
