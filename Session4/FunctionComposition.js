//http://www.codewars.com/kata/function-composition
function compose(f,g) {
  var args = arguments;
    return function sendVal(val) {
        for (var item = args.length - 1; item >= 0; item--) {
            if (typeof args[item] === "function") {
                val = args[item](val);
            }
        }
        return val;
    }
}