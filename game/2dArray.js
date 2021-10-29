function Create2DArray(rows) {
  var arr = [];

  for (var i = 0; i < rows; i++) {
    arr[i] = [];
  }

  return arr;
}

console.log(Create2DArray(9));

var iMax = 3;
var jMax = 6;
var f = new Array();

for (i = 0; i < iMax; i++) {
  f[i] = new Array();
  for (j = 0; j < jMax; j++) {
    f[i][j] = 0;
  }
}
console.log(f);
