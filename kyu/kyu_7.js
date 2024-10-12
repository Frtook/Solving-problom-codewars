// Vowel Count

// function getCount(str) {
//   // soul 1

//   // const vowels = ["a","e","u","o","i"]
//   // let count = 0
//   // for(let i = 0 ; i < str.length ; i++) {
//   //   for(let j = 0; j<vowels.length ; j++) {
//   //     if(str[i] === vowels[j]) {
//   //       count +=1
//   //     }
//   //   }
//   // }
//   // return count

//   // soul 2
//   return str.match(/[eiuao]/gi).length
// }

// console.log(getCount("abracadabra"))

// Disemvowel Trolls

// function disemvowel(str) {
//   // soul 1
//     // let newString = ""
//     // for(let i = 0 ; i < str.length ; i ++) {
//     //   if(str[i].toLowerCase() === "e" || str[i].toLowerCase() === "i" || str[i].toLowerCase() === "o" || str[i].toLowerCase() === "a" || str[i].toLowerCase() === "u") {
//     //     continue
//     //   } else {
//     //     newString += str[i]
//     //   }
//     // }
//     // return newString

//     // soul 2
//     return str.replace(/[eoiua]/gi,"")

// }

// console.log(disemvowel("This website is for losers LOL!"))

// Square Every Digit

// function squareDigits(num){
//   // soul 1
//   // const numString =String(num)
//   // let result = ""
//   // for(let i = 0; i< numString.length ; i++) {
//   //   result += +numString[i] * +numString[i]
//   // }
//   // return Number(result)

//   // // soul 2
//   return Number(String(num).split("").map(e=>+(e*e)).join(''))
// }
// console.log(squareDigits('456'))
// Highest and Lowest

// function highAndLow(numbers) {
//   /**
//    1, let two var
//    2. loop in num
//    if compare the num
//    return the var

//    max : 8 , 42
//    min : 3 ,-5

//    */
//   // soul 1

//   // let numberArray = numbers.split(" ");
//   // let max = numberArray[0];
//   // let min = numberArray[0];
//   // console.log(numberArray);
//   // for (let i = 1; i < numberArray.length; i++) {
//   //   if (+numberArray[i] > max) {
//   //     max = numberArray[i];
//   //   }
//   //   if (+numberArray[i] < min) {
//   //     min = numberArray[i];
//   //   }
//   // }

//   // return `${max} ${min}`;

//   // soul 2
//   let sortedArray = numbers
//     .split(" ")
//     .map((e) => +e)
//     .sort((a, b) => a - b);
//   return `${sortedArray[sortedArray.length - 1]} ${sortedArray[0]}`;
// }
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

// List Filtering

// function filter_list(l) {
//   // soul 1
//   // let arrayOfNumbers = [];
//   // for (let i = 0; i < l.length; i++) {
//   //   if (Number.isInteger(l[i])) {
//   //     arrayOfNumbers.push(l[i]);
//   //   }
//   // }
//   // return arrayOfNumbers;
//   // soul 2
//   return l.filter((e) => typeof e === "number");
//   // soul 3
//   return l.filter((e) => Number.isInteger(e));
// }

// Descending Order

// function descendingOrder(n) {
//   /*
//   321312132
//   1.sort
//   return it as number
//   */

//   // soul 1
//   return Number(
//     String(n)
//       .split("")
//       .sort((a, b) => b - a)
//       .join("")
//   );
// }

// console.log(descendingOrder(1021));

// You're a square!

// var isSquare = function (n) {
//   return Number.isInteger(Math.sqrt(n, 1 / 2));
// };
// console.log(isSquare(1));

// Get the Middle Character

// function getMiddle(s) {
//   if (s.length % 2 === 0) {
//     return `${s[s.length / 2 - 1]}${s[s.length / 2]}`;
//   } else {
//     return `${s[Math.floor(s.length / 2)]}`;
//   }
// }

// Isograms

// function isIsogram(str) {
//   // soul 1

//   // str = str.toLowerCase();
//   // let emptyArray = [];
//   // for (let i = 0; i < str.length; i++) {
//   //   if (emptyArray.includes(str[i])) {
//   //     return false;
//   //   }
//   //   emptyArray.push(str[i]);
//   // }
//   // return true;

//   // soul 2

//   return new Set(str.toLowerCase()).size === str.length ? true : false;
// }

// console.log(isIsogram("abcD"));

// Exes and Ohs
// function XO(str) {
//   // soul 1
//   /*
//   xxoo
//   let o
//   let x
//   loop in str
//     append(to the var)
//   return o.length - x.length === 0

//   */
//   // let x = 0;
//   // let o = 0;
//   // str = str.toLowerCase();
//   // for (let i = 0; i < str.length; i++) {
//   //   if (str[i] === "x") {
//   //     x += 1;
//   //   } else if (str[i] === "o") {
//   //     o += 1;
//   //   }
//   // }
//   // return o - x === 0;
//   // soul 2 not work
//   // if (!str) {
//   //   return true;
//   // }
//   // let arrRE = str.match(/[(x|o)]/gi).sort();
//   // console.log(arrRE);
//   // return arrRE.lastIndexOf("o") === arrRE.length / 2 - 1;
// }

// console.log(XO("ooxxXO"));

// Jaden Casing Strings
// String.prototype.toJadenCase = function () {
//   return this.replace(/\b\w/gi, (math) => math.toUpperCase());
// };
// var str = "How can mirrors be real if our eyes aren't real";
// str.toJadenCase();
// console.log();

// Shortest Word
// function findShort(s) {
//   // soul 1
//   //   return s.split(" ").sort((a, b) => a.length - b.length)[0];
// }
// console.log(findShort("Let's travel abroad shall we"));
// console.log("object");

// Mumbling;

// function accum(s) {
//   /*
//   abcd => A-Bb-Ccc-Dddd
//   [a,b,c,d]
//   map => (e,index) e.upper + e.repet(i)+'-'
//   [A-,Bb-,Ccc-,Dddd-]
//   */
//   // soul 1
//   // return s
//   //   .split("")
//   //   .map(
//   //     (e, i, arr) =>
//   //       `${e.toUpperCase()}${e.repeat(i).toLowerCase()}${
//   //         arr.length - 1 !== i ? "-" : ""
//   //       }`
//   //   )
//   //   .join("");
// }
// accum("ZpglnRxqenU");
// // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"

// String ends with?

// function solution(str, ending) {
//   // soul 1
//   /*
//   let str , ending = 'abc', 'bc'
//   loop in ending reversed
//   if (end[i] !== str[i]) {
//     return false
//   }
//   return true
//   */
//   // let lenStr = str.length - 1;
//   // for (let i = ending.length - 1; i > -1; i--) {
//   //   if (ending[i] !== str[lenStr]) {
//   //     return false;
//   //   }
//   //   lenStr -= 1;
//   // }
//   // return true;

//   // soul 2
//   return str.endsWith(ending);
// }

// console.log(solution("abc", "bc"));
// console.log(solution("abc", "d"));

// Complementary DNA

// function dnaStrand(dna) {
//   /*
//   a => t
//   t => a
//   c => g
//   g => c

//   "ATTGC" --> "TAACG"
//   let newStr = ""
//   loop in str
//     if(str[i] === "") {
//       new...
//     }
//   */
//   //  soul 1
//   // newStr = "";
//   // for (let i = 0; i < dna.length; i++) {
//   //   if (dna[i] === "A") {
//   //     newStr += "T";
//   //   } else if (dna[i] === "T") {
//   //     newStr += "A";
//   //   } else if (dna[i] === "C") {
//   //     newStr += "G";
//   //   } else if (dna[i] === "G") {
//   //     newStr += "C";
//   //   }
//   // }
//   // return newStr;
// }
// console.log(dnaStrand("ATTGC"));

// Sum of two lowest positive integers

// function sumTwoSmallestNumbers(numbers) {
//   // soul 1
//   /*
//   [9,10,8,6,7,1,5]

//   let low1 : 9 8 6 1
//   let low2 : 10 9 8 6 5
//   loop in numbers
//   if( low1 >  numbers[i]) {
//     if(low1 < low2) {
//       low2 = low1
//     }
//     low1 = numbers[i]
//   } else if ( low2 > numbers[i]) {
//     low2 = numbers[i]
//   }
//   */
//   // let low1 = numbers[0];
//   // let low2 = numbers[1];
//   // for (let i = 2; i < numbers.length; i++) {
//   //   if (low1 > numbers[i]) {
//   //     if (low1 < low2) {
//   //       low2 = low1;
//   //     }
//   //     low1 = numbers[i];
//   //   } else if (low2 > numbers[i]) {
//   //     low2 = numbers[i];
//   //   }
//   // }
//   // return low1 + low2;

//   // soul 2
//   return numbers
//     .sort((a, b) => a - b)
//     .splice(0, 2)
//     .reduce((a, b) => a + b);
// }
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
// Beginner Series #3 Sum of Numbers

// function getSum(a, b) {
//   /*
//   let main = a > b? b:a
//   let max = a > b? a:b
//   let result = 0
//   loop in main to max
//   result += i
//   */
//   // soul 1
//   // let min = a > b ? b : a;
//   // let max = a > b ? a : b;
//   // let result = 0;
//   // for (let i = min + 1; i < max; i++) {
//   //   result += i;
//   // }

//   // soul 2
//  let min = a > b ? b :a
//   let max = a > b ? a :b
//  return Array((max - min) + 1)
//     .fill(0)
//     .map((e) => (e = min++))
//     .reduce((a, b) => a + b)
// }

// // Friend or Foe?

// // function friend(friends) {
// //   //your code here

// //   // soul 1
// //   return friends.filter((e) => e.length === 4);
// // }

// // console.log(friend(["Ryan", "Kieran", "Mark"]));

// // Credit Card Mask

// function maskify(cc) {
//   return cc.length > 3
//     ? "#".repeat(cc.length - 4) + cc.substring(cc.length - 4)
//     : cc;
// }
// console.log(maskify("11616"));

// Binary Addition
// function addBinary(a, b) {
//   return toBinry(a + b);
// }
// function toBinry(number) {
//   let binary = [];
//   while (number >= 1) {
//     number = number / 2;
//     if (Number.isInteger(number)) {
//       binary.unshift("0");
//     } else {
//       number = Number.parseInt(number);
//       binary.unshift("1");
//     }
//   }
//   return binary.join("");
// }

// console.log("110010");

// Is this a triangle?

// function isTriangle(a, b, c) {
//   let arr = [a, b, c].sort((a, b) => a - b);
//   return arr[0] + arr[1] > arr[2];
// }

// Regex validate PIN code

// function validatePIN(pin) {
//   //return true or false
//   console.log(/^(\d{6}|\d{4})$/i.test(pin));
// }
// validatePIN("12345");

//
// Two to One

// function longest(s1, s2) {
//   // your code
//   return [...new Set((s1 + s2).split("").sort())].join("")
// }
// longest("xyaabbbccccdefww", "xxxxyyyyabklmopq");
// Find the next perfect square!

// function findNextSquare(sq) {
//   // soul 1
//   if (Number.isInteger(Math.sqrt(sq))) {
//     while (true) {
//       sq++;
//       if (Number.isInteger(Math.sqrt(sq))) {
//         return sq;
//       }
//     }
//   }
//   return -1;
// }
// findNextSquare(121);
// Printer Errors

// function printerError(s) {
//   /*
//   aaabbbbhaijjjm
//   loop in string
//   error = 0
//   if i not include a to m
//   error += 1
//   return `errir / str.length`
//   */

//   let errorStr = "abcdefjihgklm";
//   let error = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (!errorStr.includes(s[i])) {
//       error += 1;
//     }
//   }
//   return `${error}/${s.length}`;
//   // soul 2

// }
// printerError("aaaxbbbbyyhwawiwjjjwwm");

// Categorize New Member

// function openOrSenior(data) {
//   // ...

//   let result = [];
//   for (i of data) {
///     let [a, b] = i;
//     if (a < 0 || b < 0) {
//       result.push("Open");
//     } else if (b >= 7 && a >= 55) {
//       result.push("Senior");
//     } else {
//       result.push("Open");
//     }
//   }
//   return result;
// }

// console.log(
//   openOrSenior([
//     [45, 12],
//     [55, 21],
//     [19, -2],
//     [104, 20],
//   ])
// ); //,['Open', 'Senior', 'Open', 'Senior']
// console.log(
//   openOrSenior([
//     [3, 12],
//     [55, 1],
//     [91, -2],
//     [53, 23],
//   ])
// ); // ,['Open', 'Open', 'Open', 'Open']

// Ones and Zeros

// const binaryArrayToNumber = (arr) => {
//   // your code

//   // let start = 1;
//   // let result = 0;
//   // for (let i = arr.length - 1; i > -1; i--) {
//   //   result += arr[i] * start;
//   //   start *= 2;
//   // }
//   // return result;
//   return arr.reverse().reduce((a, b, i) => a * 2 ** i + b * 2 ** (i + 1), 0);
// };
// console.log(binaryArrayToNumber([0, 0, 1, 0]));

// Number of People in the Bus

// const number = function (busStops) {
//   // soul 1
//   //   let right = 0;
//   // for (i of busStops) {
//   //   const [a, b] = i;
//   //   left += a;
//   //   right += b;
//   // }
//   //   return left - right
// };

// Reverse words

// function reverseWords(str) {
//   /*
//   "This is an example!" ==> "sihT si na !elpmaxe"

//   loop is str.split(" ")
//   [[This] ,[is] ,[an] ,[example!]].map((e) e.reverse())

//   */
//   return str
//     .split(" ")
//     .map((e) => [...e].reverse().join(""))
//     .join(" ");
// }
// console.log(reverseWords("This is an example!"));

// Odd or Even?

// function oddOrEven(array) {
//   return array.reduce((a, b) => a + b, 0) % 2 ? "even" : "odd";
// }

// The highest profit wins!
// function minMax(arr) {
//   if (arr.length === 1) {
//     return [arr[0], arr[0]];
//   }
//   const [a, ...b] = arr.sort((a, b) => a - b);
//   return [a, b[b.length - 1]];
// }

// console.log(minMax([1, 2, 3, 4, 5]));

// Sum of the first nth term of Series

// function SeriesSum(n) {
//   // soulution 1
//   // let result = 1;
//   // let counter = 4;
//   // for (let i = 1; i < n; i++) {
//   //   result += 1 / counter;
//   //   counter += 3;
//   // }
//   // return n ? result.toFixed(2) : "0.00";
// }

// console.log(SeriesSum(5));

// Find the divisors!

// function divisors(integer) {
//   /*
//   let divisors = []
//   for i in n
//     if i % 2 == 0
//       divisors.push(i)

//   */

//   let divisors = [];
//   for (let i = 2; i < integer; i++) {
//     if (!(integer % i)) {
//       divisors.push(i);
//     }
//   }
//   return divisors.length ? divisors : `${integer} is prime`;
// }

// console.log(divisors(13));

// Remove the minimum

// function removeSmallest(numbers) {
//   // let min = numbers[0];
//   // let minIndex = 0;
//   // for (let i = 1; i < numbers.length; i++) {
//   //   if (numbers[i] < min) {
//   //     min = numbers[i];
//   //     minIndex = i;
//   //   }
//   // }
//   // console.log(min, minIndex);
//   // return numbers.filter((e, i) => i !== minIndex);
//   [].findIndex()
// }
// console.log(removeSmallest([1, 2, 3, 4, 5]));
// const array1 = [5, 12, 8, 130, 44];

// console.log(array1.findIndex((e) => e > e));
