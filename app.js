// Ques 1: given a string, reverse the sentence

function reverseString(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseString("hey my name is simran"));

// Ques 2: given a string, reverse the sentence & each word

function reverseWordsAndSentence(str) {
  let words = str.split(" ");
  let reversedWords = words.map((word) => word.split("").reverse().join(""));
  return reversedWords.reverse().join(" ");
}

console.log(reverseWordsAndSentence("hey my name is simran"));

// understanding split
console.log("simran".split("")); // [ 's', 'i', 'm', 'r', 'a', 'n' ]
console.log("simran gangwani".split(" ")); // [ 'simran', 'gangwani' ]
console.log("simran".split("a")); // [ 'simr', 'n' ]

// Ques 3: check if an object is array or not

// Problem
// typeof [];  //object
// typeof {};  // object

function checkArray(elem) {
  return Array.isArray(elem);
}

console.log(checkArray(1)); //false
console.log(checkArray([1, 2, 3])); //true
console.log(checkArray({})); //false

// Ques 4: how to empty an array in javascript
var arr = [1, 2, 3, 4, 5];
arr.length = 0;
console.log(arr);

// Ques 5: How would you check if a number is an interger
function checkInt(num) {
  return Number.isInteger(num);
}

console.log(checkInt(1.0)); //true
console.log(checkInt(4)); //true
console.log(checkInt(2.3)); //false

// ORRR

function checkInteger(num) {
  if (num % 1 === 0) console.log("Number is integer");
  else console.log("number is not an integer");
}

checkInteger(1.0); //true
checkInteger(4); //ture
checkInteger(4.7); //false

// Ques 6: Make this work: duplicate([1,2,3,4,5]);  // [1,2,3,4,5,1,2,3,4,5]

function duplicate(arr) {
  return arr.concat(arr);
}

console.log(duplicate([1, 2, 3, 4, 5]));

// ORRRRRRR

function duplicateArr(arr) {
  return [...arr, ...arr];
}

console.log(duplicateArr([1, 2, 3]));

// Ques 7: write a js function that reverse a number

function doReverse(num) {
  return Number(num.toString().split("").reverse().join(""));
}

console.log(doReverse(143));

// ORRRRR

function reverseNum(num) {
  var reverse = 0;
  while (num > 0) {
    var remainder = num % 10;
    reverse = reverse * 10 + remainder;
    num = Math.floor(num / 10);
  }
  return reverse;
}

console.log(reverseNum(126));

//  Ques 8: write a js function that checks whether a passed string is palindrome or not

function checkPalindrome(str) {
  var reverseStr = str.split("").reverse().join("");

  if (str == reverseStr) console.log("String is palindrome");
  else console.log("String is not palindrome");
}

checkPalindrome("simran");

//  Ques 9: write a js function that returns a passed string with letters in alphabetical order

function alphabeticalOrder(str) {
  return str.split("").sort().join("");
}

console.log(alphabeticalOrder("dbac"));
console.log(alphabeticalOrder("simran"));

//  Ques 10: write a js function that accepts a string as a parameter ans convert the first letter of each word of the string in upper case

function firstLetterUppercase(str) {
  var transformedStr = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");

  return transformedStr;
}

console.log(firstLetterUppercase("hey my Name is simran"));

// Ques 11: write a js function to get the number of occurance of each letter in specified string

function countOccurances(str) {
  var occurances = {};
  str.split("").forEach((letter) => {
    if (occurances.hasOwnProperty(letter) === false) occurances[letter] = 1;
    else occurances[letter]++;
  });
  return occurances;
}

console.log(countOccurances("gangwani"));

// Ques 12: loop an array and add all numbers of it

function calculteSum(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(calculteSum([1, 4, 6]));

// ORRRRR

var arr = [1, 2, 3, 4, 5];
var sum = 0;

arr.forEach(function (elem) {
  sum = sum + elem;
});

console.log(sum);

// Ques 13: in an array of number and strings, only add those numbers which are not strings

var arr = [
  1,
  "hello",
  2,
  "world",
  3,
  "my",
  4,
  "name",
  "is",
  "simran",
  "male",
  6,
  "female",
  7,
];

function addNums(arr) {
  return arr
    .filter((elem) => typeof elem === "number")
    .reduce((acc, curr) => acc + curr, 0);
}

console.log(addNums(arr));

// Ques 14: loop an array of objects and remove all the objects which do not have gender's value male

var details = [
  { name: "simran", age: 24, gender: "female" },
  { name: "rohan", age: 47, gender: "male" },
  { name: "mohit", age: 32, gender: "male" },
  { name: "shruti", age: 34, gender: "female" },
  { name: "vishal", age: 58, gender: "male" },
];

var filteredDetails = details.filter((detail) => detail.gender === "male");
console.log(filteredDetails);
