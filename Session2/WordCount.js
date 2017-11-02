//http://www.codewars.com/kata/word-count
function countWords(str) {
    var length, breakWords, regex, breakWords;
    regex = /[^\u0000-\u00ff]/; //To test Unicode characters
    if (regex.test(str)) {
        str = str.replace(/(?! )\s/g, ' '); //To replace unicode characters
    }
    breakWords = str.trim().match(/\S+/g) || [];
    return breakWords.length;
}
