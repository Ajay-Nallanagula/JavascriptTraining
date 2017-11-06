function construct(Class) {
    var args, newObj;
    args = Array.prototype.slice.call(arguments, 1);
    newObj = Object.create(Class.prototype); //this will have own set of sayhello say bye
    Class.apply(newObj, args); //hard binding this in this case
    return newObj;
}
