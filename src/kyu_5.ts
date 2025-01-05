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
