//http://www.codewars.com/kata/prefill-an-array/train/javascript
function prefill(noOfElements, items) {
    var newArry, regex;
    newArry = [];
    regex = new RegExp("^[1-9][0-9]*$");
    if (regex.test(noOfElements)) {
        newArry.length = noOfElements;
        newArry.fill(items);
    } else if (typeof(noOfElements) == "boolean" || noOfElements != 0) {
        throw new TypeError(`${noOfElements} is invalid`);
    }
    return newArry;
}
