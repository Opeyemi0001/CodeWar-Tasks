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

// (4) Very simple, given a number (integer / decimal / both depending on the language),
// find its opposite (additive inverse).

// Examples:
// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
  //your code here
  return -number;
}
console.log(opposite(3));

// (5) The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  return s
  .split("")
  .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
  .join("-");
};

console.log(accum("opeyemi"));


// (6) Given an integral number, determine if it's a square number:
// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

function isSquare(n){
  if ( n < 0 ) return false; // Negative numbers cannot be perfect squares
  const sqrt = Math.sqrt(n); // Calculate the square root of n
  return Number.isInteger(sqrt); // Check if the square root is an integer
}

console.log(isSquare(25));


// (7) Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

function disemvowel(str){
  return str.replace(/[aeiouAEIOU]/g, "");
}

console.log(disemvowel("This websites is for losers LOL!"));




// (8) In this little assignment you are given a string of space separated numbers, 
// and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, 
// and highest number is first.

function highAndLow(numbers) {
  const num = numbers.split(' ').map(Number);
  const max = Math.max(...num)
  const min = Math.min(...num);
  return `${max} ${min}`;
}

console.log(highAndLow('1 4 2 -5 6'));



// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. 
// The string can contain any char.

// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  const normalized = str.toLowerCase() //convert the string lowercase
  const xCount = (normalized.match(/x/g) || []).length; //count x's using RegEx
  const oCount = (normalized.match(/o/g) || []).length; //count x's using RegEx
  return xCount === oCount; // check if the counts equal
}

console.log(XO("ooxx"));