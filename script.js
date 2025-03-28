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



// (16) In this kata you will create a function that takes a list of non-negative integers
// and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list (lst) {
  return lst.filter((item)=> typeof item === "number");
}
console.log(filter_list([1, 2, 3, "a", "d"]));



// (17) Given an array of integers your solution should find the smallest integer.

// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty

function findSmallestInt(arr) {
  return Math.min(...arr);
}

console.log(findSmallestInt([34, 12, -6, 56]));

// (18) Create a function that returns the sum of the two lowest positive 
// numbers given an array of minimum 4 positive integers. 
// No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455

function sumTwoSmallestNumbers(numbers) {  
  const nums = numbers.sort((a,b)=> a-b );
  return nums[0] + nums[1];
  
}
console.log(sumTwoSmallestNumbers([3, 5,1,6,2]))


// (19) Write a function that accepts a non-negative integer n and a string s as parameters,
// and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
  return s.repeat(n);
}

console.log(repeatStr(6, "i"));


// (20) Implement a function that accepts 3 integer values a, b, c.
// The function should return true if a triangle can be built with
// the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).

// Examples:
// Input -> Output
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false

function isTriangle (a,b,c) {
  return a > 0 && b > 0 && c > 0 && (a + b > c) && (a + c > b) && (b + c > a);
}
console.log(isTriangle(1,2,2));




// (21) You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. 
// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the argument is itself not a perfect square then return either -1 or an empty value like None or null,
// depending on your language. You may assume the argument is non-negative.

// Examples ( Input --> Output )
// 121 --> 144
// 625 --> 676
// 114 --> -1  #  because 114 is not a perfect square

function findNextSquare(sq) {
  const sqrt = Math.sqrt(sq);
  const nextSqrt = Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1 || null ;
  return nextSqrt;
}
console.log(findNextSquare(121));




// (22) Usually when you buy something, you're asked whether your credit card number,
// phone number or answer to your most secret question is still correct.
//  However, since someone could look over your shoulder, 
// you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, 
// which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" -->
// "####################################man!"

function maskify (str) {
  return str.length > 4 ? "#".repeat(str.length - 4) + str.slice(-4) : str; 
}
console.log(maskify("234567756553536655"));



// (23) Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
  return n**3;
}
console.log(rowSumOddNumbers(3));



// (24) Create a function named divisors/Divisors that takes an integer
//  n > 1 and returns an array with all of the integer's divisors
//  (except for 1 and the number itself), from smallest to largest. 
//  If the number is prime return the string '(integer) is prime' 
//  (null in C#, empty table in COBOL) (use Either String a in Haskell 
//   and Result<Vec<u32>, String> in Rust).

// Examples:
// divisors(12) --> [2, 3, 4, 6]
// divisors(25) --> [5]
// divisors(13) --> "13 is prime"



function divisors(n) {
  let result = [];
  
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      result.push(i);
    }
  }
  
  return result.length ? result : `${n} is prime`;
}
console.log(divisors(24))



// (25) In this simple assignment you are given a number and have to make it negative.
//  But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

function makeNegative(num) {
  // Code?
  return num > 0 ? -num : num;
}

console.log(makeNegative(-45))



// (26) It's pretty straightforward. 
// Your goal is to create a function that removes the first and last characters
// of a string. You're given one parameter, the original string. You don't have
// to worry about strings with less than two characters.

function removeChar(str){
  return str.slice(1, -1);
}
console.log(removeChar("hello"))


// (27) Write a function that removes the spaces from the string, 
// then return the resultant string.

// Examples (Input -> Output):

// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

function noSpace(x) {
  return x.replace(/\s/g, "");
}
console.log(noSpace("jshdh sunwn hsjns"));



// (28) Complete the method that takes a boolean value and return a 
// "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  return bool ? "Yes" : "No";
}
console.log(boolToWord(false))


// (29) We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

function numberToString(num) {
  return num.toString();
}
console.log(numberToString(100))


// (30) Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number). 
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return "Invalid operator";
  }
}
console.log(basicOp("/", 10, 5));



// Your task is to write a function which returns the n-th term of the following series, 
// which is the sum of the first n terms of the sequence (n is the input parameter).

// Series: 1+ 1/4 + 1/7 + 1/10 + 1/13 + 1/16 + …

// You will need to figure out the rule of the series to complete this.

// Rules
// You need to round the answer to 2 decimal places and return it as String.
// If the given value is 0 then it should return "0.00".
// You will only be given Natural Numbers as arguments.
// Examples (Input --> Output)
// n
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n) {
  let sum = 0;
  let denominator = 1;
  for (let i = 0; i < n; i++) {
    sum += 1 / denominator;
    denominator += 3;
  }
  return sum.toFixed(2);
}
console.log(SeriesSum(2));


// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, 
// he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to 
// return the number of litres Nathan will drink, rounded down.

// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

function litres(time) {
  return Math.floor(time * 0.5);
}
console.log(litres(6.7));


// The first century spans from the year 1 up to and including the year 100, 
// the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.
// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28

function century(year) {
  return Math.ceil(year / 100);
}
console.log(century(1900));



// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function maps(x) {
  return x.map((num)=> num * 2);
}
console.log(maps([1, 5, 3]));



// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
  return str.split("").reverse().join('');
}
console.log(solution("world"));


// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function arguments(str, ending) {  
  return str.endsWith(ending);
}
console.log(arguments("abcd", "c"));



// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... 
// but who is going to make the most money?
// Build a function that takes in two arguments (salary, bonus). 
// Salary will be an integer, and bonus a boolean.
// If bonus is true, the salary should be multiplied by 10. 
// If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
// Return the total figure the individual will receive as a 
// string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$"
//  (C#, C++, Dart, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).


function bonusTime(salary, bonus ) {
  return "£" + (bonus ? salary * 10 : salary);
}
console.log(bonusTime(100, true));


// Write a function to convert a name into initials. 
// This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

function abbrevName(name) {
  return name.split(" ").map((word)=> word[0].toUpperCase()).join(".");
}
console.log(abbrevName("Opeyemi Onanuga"));
