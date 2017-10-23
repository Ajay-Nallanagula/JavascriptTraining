//http://www.codewars.com/kata/partition-on
 function partitionOn(pred, items) {
     var trueArr = [];
     var falseArr = [];
     var index = -1;
     var pt;
     items.forEach(function(item) {

         if (pred(item)) {
             trueArr.push(item);
         } else {
             falseArr.push(item);
         }
     });

     pt = falseArr.concat(trueArr);
     for (var i = 0; i < pt.length; i++) {
         if (index < 0 && pred(pt[i])) {
             index = i;
         }
         items[i] = pt[i];
     }
     return index;

 }
