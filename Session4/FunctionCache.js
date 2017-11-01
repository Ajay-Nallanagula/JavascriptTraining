//http://www.codewars.com/kata/function-cache
var complexFunction = function(arg1, arg2) {
    return arg1 + arg2;
}

var cache = function cached(func) {
    var cacheObj = {};
    return function(arg1, arg2) {
        var key;
        key = arg1 + arg2;
        if (cacheObj[key]) {
            return cacheObj[key];
        } else {
            cacheObj[key] = func(arg1, arg2);
            return cacheObj[key];
        }
    }
}