// Moving Zeros To The End
// type mix = (boolean | number | string)[];
// function moveZeros(arr: mix) {
//   let zeroArr = arr.filter((e) => e === 0);
//   return arr.filter((e) => e !== 0).concat(zeroArr);
// }
// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

// Simple Pig Latin

// function pigIt(str: string) {
//   return str.replace(/\w+/g, (word) => `${word.slice(1)}${word.charAt(0)}ay`);
// }
// console.log(pigIt("for i in range"));

// Human Readable Time

// function humanReadable(seconds: number) {
//   let h = 0;
//   let m = 0;
//   let s = 0;
//   while (seconds !== 0) {
//     if (seconds >= 3600) {
//       h++;
//       seconds -= 3600;
//     } else if (seconds >= 60) {
//       m++;
//       seconds -= 60;
//     } else {
//       s++;
//       seconds--;
//     }
//   }
//   return `${getZero(h)}:${getZero(m)}:${getZero(s)}`;
//   function getZero(number: number) {
//     let numberStr = number.toString();
//     return numberStr.length === 1 ? `0${number}` : `${number}`;
//   }
// }

// console.log(humanReadable(3599));

// RGB To Hex Conversion

// function rgb(r: number, g: number, b: number) {
//   return (valueHex(r) + valueHex(g) + valueHex(b)).toUpperCase();

//   function valueHex(hex: number) {
//     if (hex < 0) {
//       return "00";
//     } else if (hex > 256) {
//       return "FF";
//     }
//     const color = hex.toString(16);
//     return color.length === 1 ? 0 + color : color;
//   }
// }
// console.log(rgb(14, 249, 84));

// The Hashtag Generator
// function generateHashtag(str: string) {
//   if (str.trim().length === 0) return false;
//   let hashStr = str
//     .replace(/\w+/gi, (e) => e.charAt(0).toUpperCase() + e.slice(1))
//     .split(" ")
//     .join("");

//   if (hashStr.length >= 140) return false;
//   return "#" + hashStr;
// }
// console.log(generateHashtag("code" + " ".repeat(140) + "wars"));

// Rot13

// let charArray = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];
// function rot13(message: string) {
//   let resultStr = "";
//   for (let i of message) {
//     if (/[A-Z]/.test(i)) {
//       resultStr += getCharRot13(i.toLowerCase()).toUpperCase();
//     } else if (/[a-z]/.test(i)) {
//       resultStr += getCharRot13(i);
//     } else resultStr += i;
//   }
//   return resultStr;
// }
// function getCharRot13(str: string) {
//   let index = charArray.indexOf(str);
//   return charArray[(index = (index + 13) % 26)];
// }
// console.log(rot13("Ruby is cool!"));
// console.log(rot13("test"));

// Directions Reduction

// function dirReduc(arr: string[]) {
//   return removeOpposite(arr);

//   function removeOpposite(arr: string[]) {
//     const countNorth = findCount("NORTH", arr);
//     const countSouth = findCount("SOUTH", arr);
//     const countEast = findCount("EAST", arr);
//     const countWest = findCount("WEST", arr);

//     if (countNorth === countSouth) {
//       arr = arr.filter((e: string) => e != "NORTH" && e != "SOUTH");
//     } else if (countNorth > countSouth) {
//       arr = removeByNumber("NORTH", "SOUTH", countSouth, arr);
//     } else if (countNorth < countSouth) {
//       arr = removeByNumber("NORTH", "SOUTH", countNorth, arr);
//     }

//     if (countEast == countWest) {
//       arr = arr.filter((e: string) => e != "EAST" && e != "WEST");
//     } else if (countEast > countWest) {
//       arr = removeByNumber("EAST", "WEST", countWest, arr);
//     } else if (countEast < countWest) {
//       arr = removeByNumber("EAST", "WEST", countEast, arr);
//     }
//     return arr;
//   }
//   function removeByNumber(
//     removeValue1: string,
//     removeValue2: string,
//     num: number,
//     arr: string[]
//   ) {
//     let count1 = 0;
//     let count2 = 0;
//     let resultArr = [];
//     for (let i of arr) {
//       if (i == removeValue1) {
//         if (count1 >= num) resultArr.push(i);
//         count1++;
//         continue;
//       }
//       if (i == removeValue2) {
//         if (count2 >= num) resultArr.push(i);
//         count2++;
//         continue;
//       }
//       resultArr.push(i);
//     }
//     return resultArr;
//   }
//   function findCount(value: string, arr: string[]) {
//     let count = 0;
//     for (const i of arr) {
//       if (i === value) count++;
//     }
//     return count;
//   }
// }

// console.log(dirReduc(["SOUTH", "NORTH", "EAST", "WEST"]));

// Extract the domain name from a URL

// function domainName(url: string) {
//   let match = /(https?:\/\/)?(www.)?(?<host>([0-9]|\w+|-)+).\w+/gi.exec(url);
//   return match?.groups?.host;

//   // console.log(url.match(/http:([\w+]).com/gi, "$2"));
// }
// console.log(domainName("http://github.com/carbonfive/raygun"));
// console.log(domainName("http://www.zombie-bites.com"));
// console.log(domainName("https://www.cnet.com"));
// console.log(domainName("www.xakep.ru"));
// console.log(domainName("http://google.co.jp"));
// console.log(
//   domainName("https://www.4zjkc-f1kt5ggthsismqgyfxn2w5x.edu/index.php")
// );

// function zero(op?: string) {
//   return op ? Math.floor(eval(`0${op}`)) : 0;
// }
// function one(op?: string) {
//   return op ? Math.floor(eval(`1${op}`)) : 1;
// }
// function two(op?: string) {
//   return op ? Math.floor(eval(`2${op}`)) : 2;
// }
// function three(op?: string) {
//   return op ? Math.floor(eval(`3${op}`)) : 3;
// }
// function four(op?: string) {
//   return op ? Math.floor(eval(`4${op}`)) : 4;
// }
// function five(op?: string) {
//   return op ? Math.floor(eval(`5${op}`)) : 5;
// }
// function six(op?: string) {
//   return op ? Math.floor(eval(`6${op}`)) : 6;
// }
// function seven(op?: string) {
//   return op ? Math.floor(eval(`7${op}`)) : 7;
// }
// function eight(op?: string) {
//   return op ? Math.floor(eval(`8${op}`)) : 8;
// }
// function nine(op?: string) {
//   return op ? Math.floor(eval(`9${op}`)) : 9;
// }

// function plus(number: number) {
//   return "+" + number;
// }
// function minus(number: number) {
//   return "-" + number;
// }
// function times(number: number) {
//   return "*" + number;
// }
// function dividedBy(number: number) {
//   return "/" + number;
// }

// console.log(two(dividedBy(eight())));

// Maximum subarray sum

// var maxSequence = function (arr: number[]) {
//   if (arr.every((e) => e < 0)) return 0;
//   let data = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       data.set(
//         `${i + 1}${j}`,
//         arr.slice(j, i + 1).reduce((a, b) => a + b, 0)
//       );
//     }
//   }

//   return Math.max(...data.values());
// };

// console.log(maxSequence([23, 44, 39]));

// First non-repeating character

// function firstNonRepeatingLetter(s: string) {
//   let arrString = s.split("").map((e) => e.toLowerCase());
//   let indexLetter;
//   for (let i = 0; i < arrString.length; i++) {
//     if (
//       arrString.indexOf(arrString[i]) === arrString.lastIndexOf(arrString[i])
//     ) {
//       indexLetter = i;
//       break;
//     }
//   }

//   return indexLetter != undefined ? s[indexLetter] : "";
// }

// console.log(firstNonRepeatingLetter("M<p"));

// String incrementer
// function incrementString(strng: string) {
//   const end = strng.slice(strng.length - 1, strng.length);
//   if (end === "9") {
//     const number = strng.replace(/[a-z]/gi, "");
//     const zero = number.length - (+number + 1).toString().length;
//     return strng.replace(/[0-9]/gi, "") + "0".repeat(zero) + (+number + 1);
//   }
//   if (Number.isInteger(+end)) {
//     return strng.slice(0, strng.length - 1) + (+end + 1);
//   }
//   return strng + 1;
// }
// console.log(incrementString("foo009"));
// console.log(incrementString("foo-1"));
// // console.log(incrementString("foo0042"));
// // console.log(incrementString("foo93"));
// // console.log(incrementString("foo0099"));

// Not very secure

// function alphanumeric(string: string) {
//   console.log(/^[a-z0-9]+$/i.test(string));
// }

// alphanumeric("forGin");
// alphanumeric("forin");
// alphanumeric("Q8!QJW");
// alphanumeric("PassW0rd");
// alphanumeric("h6");
// alphanumeric("7QIVz6X4T8Okp ZsWFhsDXflcjw");
// alphanumeric("qa");

// Count IP Addresses

// function ipsBetween(start: string, end: string) {
//   const endArr = end.split(".");
//   const startArr = start.split(".");
//   let count = 0;
//   count += (+endArr[0] - +startArr[0]) * 256 ** 3;
//   count += (+endArr[1] - +startArr[1]) * 256 ** 2;
//   count += (+endArr[2] - +startArr[2]) * 256;
//   count += +endArr[3] - +startArr[3];
//   return count;
// }
// // ipsBetween("10.0.0.0", "10.0.0.50");
// // ipsBetween("20.0.0.10", "20.0.1.0");
// // ipsBetween("10.11.12.13", "10.11.13.0");
// // ipsBetween("160.0.0.0", "160.0.1.0");
// // ipsBetween("170.0.0.0", "170.1.0.0");
// ipsBetween("50.0.0.0", "50.1.1.1");
// ipsBetween("170.0.0.0", "170.1.0.0");

// Pick peaks

// function pickPeaks(arr: number[]) {
//   let peaks = [];
//   let pos = [];
//   for (let i = 1; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i - 1]) {
//       let j = i;
//       while (arr[j] === arr[j + 1]) j++; // Move forward in case of a plateau
//       if (arr[j] > arr[j + 1]) {
//         // Confirm it's a peak
//         peaks.push(arr[i]);
//         pos.push(i);
//       }
//     }
//   }

//   return { pos, peaks };
// }
// console.log(
//   pickPeaks([
//     1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3,
//   ])
// );

// Regex Password Validation

// const Validation = (pass:string) =>{
//   return console.log(/\w{/g.test(pass))
// }

// int32 to IPv4

// function int32ToIp(int32: number) {
//   //...
//   let one = 0;
//   let two = 0;
//   let three = 0;
//   let four = 0;

//   while (int32 > 0) {
//     if (int32 > 256 ** 3) {
//       one += 1;
//       int32 -= 256 ** 3;
//     } else if (int32 > 256 ** 2) {
//       two += 1;
//       int32 -= 256 ** 2;
//     } else if (int32 > 256) {
//       three += 1;
//       int32 -= 256;
//     } else {
//       four += 1;
//       int32--;
//     }
//   }
//   return `${one}.${two}.${three}.${four}`;
// }
// console.log(int32ToIp(2149583361));
// console.log(int32ToIp(8));
// console.log(int32ToIp(32));
