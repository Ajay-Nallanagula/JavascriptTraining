//http://www.codewars.com/kata/word-count
function countWords(str) {
    var regex = /[^\u0000-\u00ff]/; //To test Unicode characters
    if (regex.test(str)) {
        str = str.replace(/(?! )\s/g, ' '); //To replace unicode characters
    }
    var breakWords = str.trim().split(" ");
    var length = 0;
    for (var i = 0; i < breakWords.length; i++) {
        if (breakWords[i].length > 0) {
            length += 1;
        }
    }

    return length;
}