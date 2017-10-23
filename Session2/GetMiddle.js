//http://www.codewars.com/kata/get-the-middle-character
function getMiddle(s) {
    var strLen = s.length;
    return s.length % 2 > 0 ? s.substr(s.length / 2, 1) : s.substr((s.length / 2 - 1), 2);
}
