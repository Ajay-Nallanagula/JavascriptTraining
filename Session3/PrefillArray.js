//http://www.codewars.com/kata/prefill-an-array/train/javascript
function prefill(noOfElements, items) {
    var newArry;
    if (!isNaN(noOfElements) && noOfElements > 0) {
        newArry = [];
        newArry.length = noOfElements;
        newArry.fill(items);
    } else {
        throw new TypeError('xyz is invalid');
    }
    return newArry;
}