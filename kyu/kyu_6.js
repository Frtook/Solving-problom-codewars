"use strict";
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
