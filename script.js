// (1) Vowel count
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

const countVowel = (str) => [...str.toLowerCase()].filter((eachLetter)=> "aeiou".includes(eachLetter)).length
console.log(countVowel("opeyemi"))

// If you want to count repeated vowels as one
const countRepeatVowel = (str) => new Set([...str.toLowerCase()].filter((eachLetter)=> "aeiou".includes(eachLetter))).size;
console.log(countRepeatVowel("opeyemi"))

// (2) Even or odd
// Create a function that takes an integer as an argument and returns
// "Even" for even numbers or "Odd" for odd numbers.
const checkNumber = (number) => (number % 2 === 0 ? "Even": "odd"); // Even number can be exactly divided by 2. Odd number cannot be divided evenly by 2.
console.log(checkNumber(10));

// (3) Get the middle character
// You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.

function getMiddle (word) {
  const middleNum = Math.floor(word.length / 2 );

  if (word.length % 2 === 0) {
    return word.slice(middleNum - 1, middleNum + 1);
  } else{
    return word[middleNum];
  }
}
console.log(getMiddle("Timini"));

// (4) Very simple, given a number (integer / decimal / both depending on the language),
// find its opposite (additive inverse).

// Examples:
// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
  return -number;
}
console.log(opposite(14));

// (5) The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum (string) {
 const accumString = string.split("").map((char, index)=> char.toUpperCase() + char.toLowerCase().repeat(index)).join("-")
 return accumString;
}
console.log(accum("book"));

// (6) Given an integral number, determine if it's a square number:
// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

function isSquare(n) {
  if (n < 0) return false;
  const square = Math.sqrt(n);
  return Number.isInteger(square);
}
console.log(isSquare(24));

// (7) Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

function disemvowel (str) {
  return str.replace(/[aeiouAEIOU]/g, "")
}
console.log(disemvowel("This is website is for lol!"));

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

function highAndLow(number) {
  const num = number.split(" ").map(Number);
  const max = Math.max(...num);
  const min = Math.min(...num);

  return `${max} ${min}`
}
console.log(highAndLow("1 2 3 4 5"));

// (9) Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive.
// The string can contain any char.

// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function xo (str) {
  const normalized = str.toLowerCase();

  const xCount = (normalized.match(/x/g) || []).length;
  const oCount = (normalized.match(/o/g) || []).length;

  return xCount === oCount;
}
console.log(xo("xxxo"));

// (10) Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
// Note: The function accepts an integer and returns an integer.
// Happy Coding!

function sqrtDigit (num) {
  return Number(
    num
    .toString()
    .split(" ")
    .map((digit)=> Number(digit) ** 2)
    .join("-")
  );
}

console.log(sqrtDigit(4232));


// (11) Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function shortestWord(sentence) {
  const shortWord = sentence.split(" ").map((word)=> word.length);
  const minimumWord = Math.min(...shortWord);

  return minimumWord;
}
console.log(shortestWord("JavaSCript is good"));

// (12) In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
// Your function receives one side of the DNA (string, except for Haskell); 
// you need to return the other complementary side. 
// DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function dnaStrand (dna) {
  const compliment ={A: "T", T: "A", C:"G", G:"C"}
  return dna.replace(/[ATCG]/g, base => (compliment[base]));
}
console.log(dnaStrand("ATAT"));

// (13) Your task is to make a function that can take any non-negative 
// integer as an argument and return it with its digits in descending order. 
// Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
  return Number(n.toString().split("").sort((a, b)=> b - a).join(""))
}
console.log(descendingOrder(25435));


// (14) You get an array of numbers, return the sum of all of the positives ones.
// Example
// [1, -4, 7, 12] => 1+ 7 + 12 = 20 1+7+12=20 Note
// If there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  return arr.filter(num=> num > 0).reduce((sum, num)=> sum + num, 0);
}
console.log(positiveSum([1,2,7,4,9]));


// (15)An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
  str = str.toLowerCase()
  return new Set(str).size === str.length
}
console.log(isIsogram("daddy"));

// In this kata you will create a function that takes a list of non-negative integers
// and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list (lst) {
  return lst.filter((item)=> typeof item === "number");
}
console.log(filter_list([1, 2, 3, "a", "d"]));
