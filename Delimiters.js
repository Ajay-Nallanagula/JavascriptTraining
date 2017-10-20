//http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
//Way 2:
//http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
function printArray(array) {
    var str = '';
    for (var i = 0; i < array.length; i++) {
        str = str + array[i];
        if (i !== array.length - 1) {
            str = str + ',';
        }
    }
    return str;
}

/*
//Way 1:
function printArray(array) {
    return array.toString();
}
*/
