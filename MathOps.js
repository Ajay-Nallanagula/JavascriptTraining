 //http://www.codewars.com/kata/basic-mathematical-operations
var basicOp = function(opr, val1, val2) {
    var result;

    switch (opr) {

        case '+':
            {
                result = val1 + val2;
                break;
            }

        case '-':
            {
                result = val1 >= val2 ? val1 - val2 : val2 - val1;
                break;
            }

        case '*':
            {
                result = val1 * val2;
                break;
            }

        case '/':
            {
                result = val1 / val2;
                break;
            }

        default:
            {
                result = "Enter only basic Operation, check operation is valid";
            }

    }
    return result;
}
