// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//str -> arr -reduce -> return new string

function reverse(str) {
  return str.split("").reduce((reversed, char) => {
    return char + reversed;
  }, "");
}

// function reverse(str) {
//   return str.split("").reverse().join("");
// }

//append char to the start of the string
// function reverse(str) {
//   let reversed = "";

//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

module.exports = reverse;
