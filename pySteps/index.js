// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//num columns
//n = 2, 3 cols
// n = 3, 5 cols
// n = 4, 7 cols

// 2N - 1
// 0 to 2n -1

// placing the pounds
// cols = 0...4
// get midpoint of the array
// Math.floor(n  / 2)
// Math.floor (5/2 ) + 1 ...

function pyramid(n) {
  const mid = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let level = "";
    for (let col = 0; col < 2 * n - 1; col++) {
      //check to make sure we are in correct bounds
      if (mid - row <= col && mid + row >= col) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
}

// recursive
// n = rows
function pyramidRecursive(n) {
  // base case
  if (row === n) {
    return;
  }

  //max cols => 2 * n -1
  //when string has length of above, log the level
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }
  const mid = Math.floor((2 * n - 1) / 2);
  let add;
  if (mid - row <= level.length && mid + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }
  pyramid(n, row, level + add);
}

module.exports = pyramid;
