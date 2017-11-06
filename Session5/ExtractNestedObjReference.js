//-	http://www.codewars.com/kata/extract-nested-object-reference
Object.prototype.hash = function(string) {
    var splitIt, self;
    splitIt = string.split('.');
    self = this;
    for (var i = 0; i < splitIt.length; i++) {
        self = !self ? undefined : self[splitIt[i]];
    }
    return self;
}