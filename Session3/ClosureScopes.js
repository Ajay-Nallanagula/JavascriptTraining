//Way 1: http://www.codewars.com/kata/closures-and-scopes/train/javascript
function createFunctions(n) {
    var callbacks, i, elem;
    callbacks = [];
    for (i = 0; i < n; i++) {
        callbacks.push((function giveExtract(i) {
            return function extractValue() {
                return i;
            };
        })(i));
    }
    return callbacks;
}


/*
Disadvantage of closure:
function createFunctions(n) {
    var callbacks, i, elem;
    callbacks = [];
    for (i = 0; i < n; i++) {
     var k = (function k2(){
    return function k3(){
    return i;
    }
     })();
    callbacks.push(k());
    }
    return callbacks;
}

closure always have the latest value of the variables available , in this case callbacks array will have value as 10 for in all the 
indexes because closures share the references not the actual value, hence to overcome this we either use let or the solution given above
ex : console.log(createFunctions(10)[6]()); 

*/





//Way 3:
/*function createFunctions(n) {
    var callbacks, i, elem;
    callbacks = [];
    for (i = 0; i < n; i++) {
    elem = (function innFunc(i) {
            return function innerMostFunc() {
                return i;
            };
        })(i);
        callbacks.push(elem);
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
