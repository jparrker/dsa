// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//iterative solution

// function vowels(str) {
//   let count = 0;
//   const check = ["a", "e", "i", "o", "u"];

//   for (let char of str.toLowerCase()) {
//     if (check.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

//regex

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
