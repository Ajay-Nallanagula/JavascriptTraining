//http://www.codewars.com/kata/word-count
function countWords(str) {
    var length;
    var breakWords;
    var regex;

    regex = /[^\u0000-\u00ff]/; //To test Unicode characters
    if (regex.test(str)) {
        str = str.replace(/(?! )\s/g, ' '); //To replace unicode characters
    }

    breakWords = str.trim().split(" ");
    length = 0;

    for (var i = 0; i < breakWords.length; i++) {
        if (breakWords[i].length > 0) {
            length += 1;
        }
    }
    return length;
}
