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
