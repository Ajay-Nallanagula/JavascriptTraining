//http://www.codewars.com/kata/partition-on
 function partitionOn(pred, items) {
    var trueArr, falseArr, index, resultArry;

    trueArr = [];
    falseArr = [];
    index = -1;

    items.forEach(function(item) {

        if (pred(item)) {
            trueArr.push(item);
        } else {
            falseArr.push(item);
        }
    });

    resultArry = falseArr.concat(trueArr);

    resultArry.forEach(function(elem, counter) {
        if (index < 0 && pred(elem)) {
            index = counter;
        }
        items[counter] = elem;
    });

    return index;

}
