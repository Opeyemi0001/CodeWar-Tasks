// (1) Vowel count
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

const countVowels = str => [...str.toLowerCase()].filter(firstLet => "aeiou".includes(firstLet)).length;
console.log(countVowels("Oipeyemd"));

// (2) Even or odd
// Create a function that takes an integer as an argument and returns
// "Even" for even numbers or "Odd" for odd numbers.
const checkNumber = Number => Number % 2 === 0 ? "Even" : "Odd";
console.log(checkNumber(5));

// (3) Get the middle character
// You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.

function getMiddle(word) {
  const middleIndex = Math.floor(word.length / 2);
  
  if (word.length % 2 === 0) {
    return word.slice(middleIndex + 1, middleIndex - 2);
  } else {
    return word[middleIndex];
  }
}
console.log(getMiddle("Three"));