//http://www.codewars.com/kata/prefill-an-array/train/javascript
function prefill(noOfElements, items) {
    var newArry;
    newArry = [];

    if (!isNaN(noOfElements) && isFinite(noOfElements) && noOfElements > 0 && noOfElements % 1 === 0 && typeof(noOfElements) !== "boolean") {
        newArry.length = noOfElements;
        newArry.fill(items);
    } else {
        if (noOfElements !== 0) {
            throw new TypeError(`${noOfElements} is invalid`);
        }

    }
    return noOfElements === 0 ? [] : newArry;
}
