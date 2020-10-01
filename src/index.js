
exports.min = function min (array) {
    if (array === undefined) {return 0};
    if (array.length == 0) {return 0}
    else {
      array.sort(function(a, b) {
          return a - b;
      })
     
    return (array[0])};
    }

exports.max = function max (array) {
    if (array === undefined) {return 0};
    if (array.length == 0) {return 0}
    else {
      array.sort(function(a, b) {
          return b - a;
      })
     
    return (array[0])};
    }

exports.avg = function avg (array) {
    if (array === undefined) {return 0};
    if (array.length == 0) {return 0}
    else {
    return array.reduce((a, b) => a + b ) / array.length;
    }
}
