var cats = []; //array to store all the cats.

function Cat(name, weight) {
    if (!name || !weight) throw "error";
    var _weight = weight;
    cats.push(this); //push the cat object to cats array as soon as the object created

    Object.defineProperty(this, "weight", {
        get: function () {
            return _weight;
        },
        set: function (value) {
            _weight = value;
        }
    });
}

Object.defineProperty(Cat, "averageWeight", { //attach a property on top of Cat function and loop through the cat array in getter function
    get: function () {
        var sum = 0;
        for (var i = 0; i < cats.length; i++) {
            sum += cats[i].weight;
        }
        return function () {
            return sum / cats.length;
        }
    }
