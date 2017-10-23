//http://www.codewars.com/kata/get-the-middle-character
function getMiddle(s) {
    var strLen = s.length;
    return strLen % 2 > 0 ? s.substr(strLen / 2, 1) : s.substr((strLen / 2 - 1), 2);
}
