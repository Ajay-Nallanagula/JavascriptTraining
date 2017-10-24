function zero(param) {
    return findDigitOrSymbol(zero.name, param);
}

function one(param) {
    return findDigitOrSymbol(one.name, param);
}

function two(param) {
    return findDigitOrSymbol(two.name, param);
}

function three(param) {
    return findDigitOrSymbol(three.name, param);
}

function four(param) {
    return findDigitOrSymbol(four.name, param);
}

function five(param) {
    return findDigitOrSymbol(five.name, param);
}

function six(param) {
    return findDigitOrSymbol(six.name, param);
}

function seven(param) {
    return findDigitOrSymbol(seven.name, param);
}

function eight(param) {
    return findDigitOrSymbol(eight.name, param);
}

function nine(param) {
    return findDigitOrSymbol(nine.name, param);
}

function plus(param) {
    return (plus.name + " " + param);
}

function minus(param) {
    return (minus.name + " " + param);
}

function times(param) {
    return (times.name + " " + param);
}

function dividedBy(param) {
    return (dividedBy.name + " " + param);
}

function findDigitOrSymbol(stk, param) {
    return typeof(param) === "undefined" ? stk : arithmeticRes(stk + " " + (param || ''));
}

function arithmeticRes(args) {
    var vals;
    var result;

    vals = args.split(" ");
    if (vals.length === 3) {
        var val1 = getValue(vals[0]);
        var opr = vals[1];
        var val2 = getValue(vals[2]);
        var result = getArithRes(val1, opr, val2);
    }

    return result;
}

function getArithRes(val1, opr, val2) {
    var result;
	
    switch (opr) {
        case "plus":
            {
                result = val1 + val2;
                break;
            }
        case "minus":
            {
                result = val1 - val2;
                break;
            }
        case "times":
            {
                result = val1 * val2;
                break;
            }
        case "dividedBy":
            {
                result = val1 / val2;
                break;
            }
    }
	
    return result;
}

function getValue(val1) {

    var result;

    switch (val1) {

        case "zero":
            {
                result = 0;
                break;
            }
        case "one":
            {
                result = 1;
                break;
            }
        case "two":
            {
                result = 2;
                break;
            }
        case "three":
            {
                result = 3;
                break;
            }
        case "four":
            {
                result = 4;
                break;
            }
        case "five":
            {
                result = 5;
                break;
            }
        case "six":
            {
                result = 6;
                break;
            }
        case "seven":
            {
                result = 7;
                break;
            }
        case "eight":
            {
                result = 8;
                break;
            }
        case "nine":
            {
                result = 9;
                break;
            }
    }
	
    return result;
}
