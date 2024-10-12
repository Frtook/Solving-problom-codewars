// 2- retutn positve number of array
// let myArray = [1, 2, -5, 3];
// solution 1
// function sum(arr) {
//   let theSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       theSum += arr[i];
//     }
//   }
//   return theSum
// }
// console.log(sum(myArray));

// solution 2

// function sum(arr) {
//   return arr.filter((e) => e > 0).reduce((a, b) => a + b);
// }
// console.log(sum(myArray));

// 3- return the ignor the upper and lower number and return the sumation
// solution 1
// function sum(arr) {
//   let theSum = 0
//   if (isValid(arr)) {
//     let upper = arr[1];
//     let lower = arr[0];
//     let newArr = [];
//     for (let i = 2; i < arr.length; i++) {
//       if (upper <= arr[i]) {
//         upper = arr[i];
//       }
//       if (lower >= arr[i]) {
//         lower = arr[i];
//         continue;
//       }
//       if (upper !== arr[i]) {
//         newArr.push(arr[i]);
//       }
//     }
//     for (let i = 0 ; i  <  newArr.length; i++) {
//       theSum += newArr[i]
//     }
//     return theSum
//   } else {
//     return theSum
//   }
// }
// function isValid(arr) {
//   if (Array.isArray(arr)) {
//     if (arr.length > 2) {
//       return true;
//     }
//   } else {
//     return false;
//   }
// }
// console.log(sum([4, 2, 0, 9, 2, 5, 8, 5, 2, 1, 7, 8, 3, 7]));
// console.log(sum([]));
// console.log(sum(null));
// console.log(sum([3]));
// console.log(sum([3, 5]));

// solution 2
// function sum(arr) {
// if (isValid(arr)) {
//   return [...new Set(arr)].sort((a,b) => a-b).filter((e,i,arr) => i!= 0 && i!= arr.length - 1 ).reduce((a,b)=>a+b)
// }
// }
// console.log(sum([4, 2, 0, 9, 2, 5, 8, 5, 2, 1, 7, 8, 3, 7]));

// 4 - repete string

// function repetStr(num,str) {
//   // solution 1
//   // let result = '';
//   // for(let i = 0 ; i < num ; i++) {
//   //   result +=str
//   // }
//   // return result

//   // solution 2
//   return `${str}`.repeat(num)

// }
// console.log(repetStr(2,"ibra"));

// 4 contvert number to revers array
//    1 convert to string
//    2 loop the start index is the lenght-1
//    3 result push subString
// const numToReversArray = (num) => {
//   // solution 1
//   // let strNum = num.toString();
//   // let arr = []
//   // for (let i = strNum.length - 1; i > -1; i--) {
//   //   arr.push(+strNum[i])
//   // }
//   // return arr
//   // solution 2
//   return num.toString().split('').reverse().map((e) => +e)
// };
// console.log(numToReversArray(1234));
// console.log(numToReversArray(0));

// 5 couning sheep
// let arr = [true, false, true, false, true, undefined, null, true, true, false];
// function countSheep(arr) {
//   // soluiont 1
//   // let sheep = 0;
//   // for (let i = 0; i < arr.length; i++) {
//   //   if (arr[i]) {
//   //     sheep++;
//   //   }
//   // }
//   // return sheep;
//   // solution 2
//   return arr.filter((e) => e).length;
// }
// console.log(countSheep(arr));

// 6 oppsite num
// function oppsite(num) {
//   // solution 1
//   // return -num;
//   // solution 2
//   // return num * -1;
//   // solution 3
//   // return num - num - num;
// }
// console.log(oppsite(50));
// console.log(oppsite(-50));

// 7 get negitive

// function getNegitive(num) {
//   if (num >= 0) {
//     return -num;
//   } else {
//     return num;
//   }
// }
// console.log(getNegitive(5));
// console.log(getNegitive(-5));

// 8 needle haystack

// function needleHaystack(arr) {
//   // solution 1
//   // for (let i = 0; i < arr.length; i++) {
//   //   if (arr[i] === "needle") {
//   //     return `found needle in position ${i}`;
//   //   }
//   // }
//   // return "not found needle";
//   // solution 2
//   let result = arr.indexOf("needle");
//   return result == -1 ? "not found" : `found needle in postion ${result}`;
// }

// console.log(needleHaystack([1, 2, "for", "hay", "needle", "need", "range"]));

// 9 count positve and sum negitve
/*
1 init max , sum
2 loop in arr 
3 count = arr[i] > 0 count ++
4 sum = if(arr[i] < 0)
*/
// function countPositveAndSumNegtive(arr) {
//   // solution 1
//   // let count = 0;
//   // let sum = 0;
//   // for (let i = 0; i < arr.length; i++) {
//   //   if (arr[i] > 0) {
//   //     count++;
//   //   } else if (arr[i] < 0) {
//   //     sum += arr[i];
//   //   }
//   // }
//   // if (count == 0 || sum == 0) {
//   //   return "empty arr";
//   // } else {
//   //   return [count, sum];
//   // }
//   // solution 2
//   let count = arr.filter((e) => e > 0).length;
//   let sum = arr.filter((e) => e < 0).reduce((a, b) => a + b, 0);
//   return count == 0 || sum == 0 ? "empty arr" : [count, sum];
// }
// console.log(
//   countPositveAndSumNegtive([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
//   ])
// );
// console.log(countPositveAndSumNegtive([undefined, null]));

// 10 double char
/*
init char
for in string 
char += string[i] 
char += string[i]
*/
// function doubleChar(str) {
//   // soultion 1
//   // let result = "";
//   // for (let i = 0; i < str.length; i++) {
//   //   result += str[i];
//   //   result += str[i];
//   // }
//   // return result;
//   // soultion 2
//   // return str
//   //   .split("")
//   //   .map((e) => e + e)
//   //   .join("");
//   // soultion 3
//   // let result = "";
//   // for (let i = 0; i < str.length; i++) {
//   //   result += str[i].repeat(2);
//   // }
//   // return result;
// }
// console.log(doubleChar("ibrahim ;_-"));

// 11 opreation
// function calc(op, ...numbers) {
//   let result = 0;
//   if (op === "+") {
//     numbers.forEach((num) => {
//       result += num;
//     });
//     return result;
//   }
//   if (op === "-") {
//     numbers.forEach((num) => {
//       result -= num;
//     });
//     return result;
//   }
//   if (op === "*") {
//     result = 1;
//     numbers.forEach((num) => {
//       result *= num;
//     });
//     return result;
//   }
//   if (op === "/") {
//     result = 1;
//     numbers.forEach((num) => {
//       if (num == 0) {
//         return "Can not divigin by zero";
//       }
//       result /= num;
//     });
//     return result;
//   } else {
//     return "Error";
//   }
// }

// console.log(calc("+", 1, 2, 3, 4));
// console.log(calc("-", 1, 2, 3, 4));
// console.log(calc("*", 1, 2, 3, 4));
// console.log(calc("/", 1, 2, 3, 4));
// console.log(calc("/", 1, 2, 0, 3));

// 12 squer or squer root
/*
if number ** 1/2 is int return squre root
else number **2
*/
// function squerOrSquerRoot(number) {
//   if (Number.isInteger(number ** (1 / 2))) {
//     return number ** (1 / 2);
//   } else {
//     return number ** 2;
//   }
// }
// console.log(squerOrSquerRoot(2));

// 13 CountByX
/*
x = 1
n = 5
[(2*1),(2*2),(2*3),(2*4),(2*5)]

init result = []
loop in n
resut.push(n[i] * x)
retrun result
*/

// function countBy(x, n) {
//   // solution 1
//   // let result = [];
//   // if (n > 0 && Number.isInteger(n)) {
//   //   for (let i = 1; i <= n; i++) {
//   //     result.push(x * i);
//   //   }
//   //   return result;
//   // }
//   // return "The number must be positve";
//   // solution 2
//   // return "0"
//   //   .repeat(n)
//   //   .split("")
//   //   .map((e, i) => {
//   //     e = i + 1;
//   //     return e * x;
//   //   });
// }
// // Array.from(arr).map((e, i) => i)
// console.log(countBy(2, 5));
// console.log(countBy(1, 10));

// 14 no spase

/*
inint result = ""
loop in string
- if string == " "
--coutine
-else reslut += string[i]
*/
// function noSpase(str) {
//   // soultion 1
//   // let reslut = "";
//   // for (let i = 0; i < str.length; i++) {
//   //   if (str[i] !== " ") {
//   //     reslut += str[i];
//   //   }
//   // }
//   // return reslut;
//   // solution 2
//   return str
//     .split("")
//     .filter((e) => e != " ")
//     .join("");
// }
// console.log(noSpase(" m  lsdkjfl jsdlk jfksdjf lask djf   "));

// 15 invers number
// function invers(arr) {
//   // solution 1
//   // for (let i = 0; i < arr.length; i++) {
//   //   arr[i] = arr[i] * -1;
//   // }
//   // return arr;
//   // solution 2
//   return arr.map((e) => -e);
// }
// console.log(invers([1, 2, -2, -4, 5]));
// console.log(invers([]));

// 16 revers
/*
inint string 
split string 
revers string 
join string 
*/
// function revers(str) {
//   // solution 1
//   // return str.split(" ").reverse().join(" ");
//   // solution 2
//   // let myReverse = "";
//   // let result = "";
//   // for (let i = str.length - 1; i > -1; i--) {
//   //   result += str[i];
//   //   if (str[i] == " ") {
//   //     myReverse += reversWord(result);
//   //     result = "";
//   //   }
//   //   if (i == 0) {
//   //     myReverse += reversWord(result + " ");
//   //   }
//   // }
//   // return myReverse.slice(1);
//   // function reversWord(str) {
//   //   let result = "";
//   //   for (let i = str.length - 1; i > -1; i--) {
//   //     result += str[i];
//   //   }
//   //   return result;
//   // }
// }
// console.log(revers("My Name Is Ibrahim"));

//17 calc avarge
/*
init result = 0 
loop throw arr
-reslut += arr[i]
return result / arr.length
*/

// const avarge = (arr) => {
//   // let reslut = 0;
//   // for (let i = 0; i < arr.length; i++) {
//   //   reslut += arr[i];
//   // }
//   // return reslut / arr.length;
//   return arr.reduce((a, b) => a + b, 0) / arr.length;
// };

// console.log(avarge([1, 2, 3, 4, 5, 6, 7]));

// 18
// const countMonky = (num) => {
//   // return Array(num)
//   //   .fill(num)
//   //   .map((e, i) => i + 1);
//   // return "0"
//   //   .repeat(num)
//   //   .split("")
//   //   .map((e, i) => i + 1);
//   return Array.from(Array(num)).map((e, i) => i + 1);
// };

// function one(num) {
//   let start = performance.now();
//   let arr = Array(num)
//     .fill(num)
//     .map((e, i) => i + 1);
//   let end = performance.now();
//   return end - start + " Fill";
// }
// function two(num) {
//   let start = performance.now();
//   let arr = "0"
//     .repeat(num)
//     .split("")
//     .map((e, i) => i + 1);
//   let end = performance.now();
//   return end - start + " repete";
// }
// function three(num) {
//   let start = performance.now();
//   let arr = Array.from(Array(num)).map((e, i) => i + 1);
//   let end = performance.now();
//   return end - start + " Array from";
// }
// console.log(one(100000));
// console.log(two(100000));
// console.log(three(100000));

// 19  Century From Year

// function century(year) {
//   // Finish this :)
//   return Math.ceil(year);
// }

// 20 Welcome!
// let langueges = [
//   ["english", "Welcome"],
//   ["czech", "Vitejte"],
//   ["danish", "Velkomst"],
//   ["dutch", "Welkom"],
//   ["estonian", "Tere tulemast"],
//   ["finnish", "Tervetuloa"],
//   ["flemish", "Welgekomen"],
//   ["french", "Bienvenue"],
//   ["german", "Willkommen"],
//   ["irish", "Failte"],
//   ["italian", "Benvenuto"],
//   ["latvian", "Gaidits"],
//   ["lithuanian", "Laukiamas"],
//   ["polish", "Witamy"],
//   ["spanish", "Bienvenido"],
//   ["swedish", "Valkommen"],
//   ["welsh", "Croeso"],
// ];

// function greet(language) {
//   let result = "Welcome"
// 	langueges.forEach((e) => {
//     const [key, value] = e;
//     if(language == key) {
//       result = value
//     }
//   });
//   return result
// }

// 21 Beginner Series #2 Clock
/*
1s = 1000
1m = 60 * 1000
1h = 60 * 60 * 1000
*/
// function past(h, m, s) {
//   return h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;
// }
// console.log(past(0, 1, 1));

// 22 Beginner Series #1 School Paperwork
// function paperwork(n, m) {
//   return n > 0 && m > 0 ? n * n : 0;
// }
// console.log(paperwork(5, 5));
// console.log(paperwork(5, -5));
// console.log(paperwork(-5, 5));
// console.log(paperwork(-5, -5));

// smath
// function great(arr) {
//   // return arr.join(" ");
//   let value = "";
//   for (let i = 0; i < arr.length; i++) {
//     value += arr[i] + " ";
//   }
//   return value;
// }
// console.log(great(["this", "is", "my", "name"]));

// 23
// Opposites Attract
// function lovefunc(flower1, flower2) {
//   // return ((flower1 % 2 == 0 && flower2 % 2 !==0) || (flower2 % 2 == 0 && flower1 % 2 !==0))? true : false
// }
// 24 Sum Arrays
/*
let result = 0
loop in arr
- i += result
return rellut
*/

// function sum(numbers) {
//   // soultion 1
//   // let result = 0 ;
//   // for(let i = 0 ; i < numbers.length; i++) {
//   //   result += numbers[i]
//   // }
//   // return result
//   // soultion 2

//   return numbers.reduce((a, b) => {
//     return a + b;
//   }, 0);
// }

// console.log(sum([1, 5.2, 4, 0, -1]));

// // 25
// function paperwork(n, m) {
//   return n > 0 && m > 0 ? n * n : 0;
// }

// console.log(paperwork(5, 5));
// console.log(paperwork(5, -5));
// console.log(paperwork(-5, -5));
// console.log(paperwork(-5, 0));

// // 26  Abbreviate a Two Word Name
// /*
// "ibrahim alnahdi"
// let result = ""
// for i in name
// - if i == 0
// -- result += name[i] +"."
// -else if name[' ']
// --resul += name[i] +"."
// for i in result
// - if i != result.length -1
// - c+= result[i]
// */
// function abbrevName(name) {
//   // soulution 1
//   // let tem = "";
//   // for (let i = 0; i < name.length; i++) {
//   //   if (i == 0) {
//   //     tem += name[i].toUpperCase() + ".";
//   //   } else if (name[i] == " ") {
//   //     tem += name[i + 1].toUpperCase() + ".";
//   //   }
//   // }
//   // let reslut = "";
//   // for (let i = 0; i < tem.length; i++) {
//   //   if (i != tem.length - 1) {
//   //     reslut += tem[i];
//   //   }
//   // }
//   // return reslut;
//   // soultion 2
//   return name
//     .split(" ")
//     .map((e) => e[0].toUpperCase())
//     .join(".");
// }
// console.log(abbrevName("ibrahim alnahdi"));

// // 27 MakeUpperCase
// function makeUpperCase(str) {}
// console.log("".toUpperCase());

// 28 Are You Playing Banjo?

// function areYouPlayingBanjo(name) {
//   if (name[0] == "r" || name[0] == "R") {
//     return name + " plays banjo";
//   } else {
//     return name + " does not play banjo";
//   }
// }

// 29 A Needle in the Haystack

// function findNeedle(haystack) {
//   for (let i = 0; i < haystack.lenght; i++) {
//     if (haystack[i] == "needle") {
//       return "found the needle at position " + i;
//     }
//   }
//   return "Your function didn't return anything";
// }

// 30 Invert values
// function invert(array) {
//   // soution 1
//   // let result = []
//   // for(let i = 0 ; i < array.length ; i++) {
//   //   result.push(array[i] * -1)
//   // }
//   // return result
//   // soultion 2
//   return array.map(e=>e*-1)
// }
//  31 Is n divisible by x and y?
// function isDivisible(n, x, y) {
//   return Number.isInteger(n/x) && Number.isInteger(n/y)
// }
// 32 Calculate average
// function findAverage(array) {
//   // soutioin 1
//   // let resutl = 0;
//   // for (let i = 0; i < array.length; i++) {
//   //   resutl += array[i];
//   // }
//   // return resutl == 0 ? resutl : resutl / array.length;
//   // soution 2
//   return  (array.reduce((a, b) => a + b, 0)) == 0? 0 :array.reduce((a, b) => a + b, 0) / array.length ;
// }

// // console.log(findAverage([1, 2, 3]));
// console.log("Nan :>> ", Number.isNaN(0 / 0));

// const getBooks = (id) => {
//   Books.findById(id).then(book=> {
//     if(book) {
//       return book
//     }
//   })
//   return null
// }
