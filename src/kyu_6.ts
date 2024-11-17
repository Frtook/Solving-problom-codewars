// Multiples of 3 or 5

// function solution(number: number):number {
//   let result: number[] = [];
//   for (let i = 1; i < number; i++) {
//     let val1 = i / 3;
//     let val2 = i / 5;

//     if (Number.isInteger(val1) && result.findIndex((e) => e === i) === -1) {
//       result.push(i);
//     }
//     if (Number.isInteger(val2) && result.findIndex((e) => e === i) === -1) {
//       result.push(i);
//     }
//   }
//   return result.reduce((a,b)=>a+b,0)
// }

// Who likes it?

// function likes(names:string[]):string {
//   if(names.length===0){
//     return "no one likes this"
//   }
//   if(names.length ===1) {
//     return `${names[0]} likes this`
//   }
//   if(names.length === 2) {
//     return`${names[0]} and ${names[1]} like this`
//   }
//   if(names.length === 3 ) {
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`
//   }
//   return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
// }

// console.log(likes(['Alex', 'Jacob']))

// Create Phone Number

// function createPhoneNumber(numbers:number[]):string{
//   return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,"($1) $2-$3")
// }

// Find the odd int

// function findOdd(A:number[]) {
//   for(let i = 0 ; i < A.length ; i++) {
//     let count = 0
//     for(let j = 0 ; j < A.length ; j++) {
//       if(A[i] ===A[j]) {
//         count +=1
//       }
//     }
//     if(count % 2 !== 0) {
//       return A[i]
//     }
//     count = 0
//   }
// }

// console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))

// Array.diff

// function arrayDiff(a:number[], b:number[]) {
//   if(b.length===0) {
//     return a
//   }
//   let result= []
//   for(let i = 0 ; i < a.length ; i ++) {
//     let exist = false
//     for(let j = 0 ; j < b.length ; j ++) {
//       if(a[i]===b[j]){
//         exist = true
//         break;
//       }
//     }
//     if(!exist) {
//       result.push(a[i])
//     }
//     exist = false
//   }
//   return result
// }
// console.log(arrayDiff( [1,2,3],[1,2]))

// Stop gninnipS My sdroW!

// function spinWords(string:string){
//   return string.replace(/\w+/ig,(e)=>reverseString(e))

//   function reverseString (string:string):string{
//     let result:string=''
//     for(let i = string.length-1 ; i > -1 ; i-- ) {
//       result += string[i]
//     }
//     return result
//   }
// }
// console.log(spinWords("Hey fellow warriors"))

// Sum of Digits / Digital Root
// const digitalRoot = (n:number):number => {
//   let str = n.toString();
//   let result = 0;
//   while (true) {
//     for (let i of str) {
//       result += +i;
//     }
//     if (str.length === 1) {
//       break;
//     }
//     str = result.toString();
//     result = 0;
//   }
//   return result;
// };

// console.log(digitalRoot(456))

// Bit Counting

// const countBits = function (n: number) {
//   let result = 0;
//   for (let i of n.toString(2)) {
//     if (i === "1") {
//       result += 1;
//     }
//   }
//   return result;
// };
// console.log(countBits(10));

// Counting Duplicates

// function duplicateCount(text: string) {
//   // soultion 1
//   let result: string[] = [];
//   for (let i = 0; i < text.length; i++) {
//     for (let j = i; j < text.length; j++) {
//       if (text[i] === text[j + 1]) {
//         result.push(text[i]);
//         break;
//       }
//     }
//   }
//   return [...new Set(result)].length;
// }

// console.log(duplicateCount("Indivibaadskjfsibility"));

// Duplicate Encoder

// function duplicateEncode(word: string): string {
//   // ...
//   word = word.toLowerCase();
//   let result: string = "";
//   if (word.length === 0) {
//     return "";
//   }

//   for (let i of word) {
//     console.log(count(word, i));
//     count(word, i) === 1 ? (result += "(") : (result += ")");
//   }

//   function count(itre: string, value: any): number {
//     let num = 0;
//     for (let i of itre) {
//       if (i === value) {
//         num += 1;
//       }
//     }
//     return num;
//   }

//   return result;
// }
// console.log(duplicateEncode("CodeWarrior"));

// Find The Parity Outlier

/*

[2, 4, 0, 100, 4, 11, 2602, 36]


*/

// function findOutlier(integers: number[]) {
//   let even = 0;
//   let odd = 0;
//   let evenVal = 0;
//   let oddVal = 0;

//   for (let i of integers) {
//     if (i % 2) {
//       odd++;
//       oddVal = i;
//     } else {
//       even++;
//       evenVal = i;
//     }
//     if (even === 1 && odd > 1) {
//       return evenVal;
//     }
//     if (odd === 1 && even > 1) {
//       return oddVal;
//     }
//   }
// }

// console.log(findOutlier([1, 2, 3, 4, 5]));
// console.log(findOutlier([2, 3, 4, 5, 6]));
// console.log(findOutlier([1, 1, 2, 2, 3]));
// console.log(findOutlier([1, 2, 1, 2, 3]));

// Replace With Alphabet Position

// function alphabetPosition(text: string) {
//   // soulution 1
//   // let result = "";
//   // text = text.toLowerCase();
//   // for (let i of text) {
//   //   let code = i.charCodeAt(0);
//   //   if (code >= 97 && code <= 122) {
//   //     result += `${+code - 96} `;
//   //   }
//   // }
//   // return result.slice(0, -1);
//   // sulution 2
//   return text.replace(/[a-z]/gi, (e) => (e.charCodeAt(0) - 96).toString());//not work
// }

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// Take a Ten Minutes Walk

// function isValidWalk(walk: string[]) {
//   let top = 0;
//   let left = 0;
//   walk.map((e) => {
//     if (e === "w") {
//       top++;
//     } else if (e === "e") {
//       top--;
//     } else if (e === "s") {
//       left++;
//     } else if (e === "n") {
//       left--;
//     }
//   });
//   return top === 0 && left === 0;
// }
// console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
// console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));

// Persistent Bugger.

// // soulution 1
// function persistence(num) {
//   let numString = num.toString();
//   let result = 1;
//   let count = 0;
//   while (true) {
//     if (numString.length === 1) {
//       break;
//     }
//     for (let i of numString) {
//       result *= +i;
//     }
//     numString = result.toString();
//     result = 1;
//     count++;
//   }
//   return count;
// }
// // soutution 2

// let count = 0;
// function persistence(num: number, next?: string | undefined) {
//   if (next?.toString().length === 1) {
//     return count;
//   }
//   count++;
//   next = num
//     .toString()
//     .split("")
//     .reduce((a, b) => +a * +b, 1)
//     .toString();
//   num = +next;
//   return persistence(num, next);
// }

// console.log(persistence(999));

// Convert string to camel case

// function toCamelCase(str: string) {
//   return str.replace(/(-|_)\w/g, (e, i, arr) => e[1].toUpperCase());
// }

// console.log(toCamelCase("the-stealth-warrior"));

// Unique In Order

// var uniqueInOrder = function (iterable: any) {
//   let result = [];
//   for (let i = 0; i < iterable.length; i++) {
//     if (iterable[i] !== iterable[i + 1]) {
//       result.push(iterable[i]);
//     }
//   }
//   return result;
// };

// console.log(uniqueInOrder("AAAABBBCCDAABBB"));
// console.log(uniqueInOrder("ABBCcAD"));
// console.log(uniqueInOrder([1, 2, 2, 3, 3]));

// Detect Pangram

// function isPangram(string: string) {
//   //...

//   string = string.toLowerCase()
//   let letters = "abcdefghijklmnopqrstuvwxyz";
//   for (let i of letters) {
//     if (!string.includes(i)) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPangram("nabcdefghijklmopqrstuvwxyz"));

// Does my number look big in this?

// function narcissistic(value: number) {
//   // Code me to return true or false

//   /*
//   153
//   "153"
//   loop in str
//     resul += str[0] ** str.length
//   return value === result
//   */

//   let result = 0;
//   let valueStr = value.toString();
//   let valueLength = valueStr.length;

//   for (let i of valueStr) {
//     result += parseInt(i) ** valueLength;
//   }
//   return value === result;
// }
// console.log(narcissistic(1235));

// Your order, please

function order(words: string) {
  return words
    .split(" ")
    .sort((a, b) => getNumber(a) - getNumber(b))
    .join(" ");

  function getNumber(str: string) {
    let value = "";
    for (let i = 0; i < str.length; i++) {
      if (Number.isInteger(parseInt(str[i]))) {
        value += str[i];
        if (!Number.isInteger(parseInt(str[i + 1]))) {
          break;
        }
      }
    }
    return Number(value);
  }
}

console.log(order("is2 Thi1s T4est 3a"));
