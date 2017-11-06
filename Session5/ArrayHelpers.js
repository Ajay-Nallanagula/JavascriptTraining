//-	http://www.codewars.com/kata/array-helpers
Object.defineProperties(Array.prototype, {
    square: {
        value: function() {
            var arr = [];
            for (var i = 0; i < this.length; i++) {
                arr.push(Math.pow(this[i], 2))
            }
            return arr;
        }
    },
    cube: {
        value: function() {
            var arr = [];
            for (var i = 0; i < this.length; i++) {
                arr.push(Math.pow(this[i], 3))
            }
            return arr;
        }
    },
    sum: {
        value: function() {
            var result = 0;
            for (var i = 0; i < this.length; i++) {
                result += this[i];
            }
            return result;
        }
    },
    average: {
        value: function() {
            return this.sum() / this.length;
        }
    },
    even: {
        value: function() {
            var arr = [];
            for (var i = 0; i < this.length; i++) {
                if (this[i] % 2 === 0) {
                    arr.push(this[i]);
                }
            }
            return arr;
        }
    },
    odd: {
        value: function() {
            var arr = [];
            for (var i = 0; i < this.length; i++) {
                if (this[i] % 2 !== 0) {
                    arr.push(this[i]);
                }
            }
            return arr;
        }
    }
});