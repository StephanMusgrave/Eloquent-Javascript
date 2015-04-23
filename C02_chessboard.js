var height = 8, width = 8;
var row = 1, column =1;
var black ="[#]", white ="[ ]";
var board = "";

for (var i = 1; i <= height; i++) {
  for (var j = 1; j <= width; j ++) {
    if ((j+i) % 2 === 0) {
      board = board + black;
    } else {
      board = board + white;
    }
  }
  board = board + "\n";
}

console.log(board);

// Book:
// var size = 8;

// var board = "";

// for (var y = 0; y < size; y++) {
//   for (var x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0)
//       board += " ";
//     else
//       board += "#";
//   }
//   board += "\n";
// }

// console.log(board);