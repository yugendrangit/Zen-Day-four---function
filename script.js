// Print odd numbers in an array :

// Using annoymous funciton :

// var result = [];
// var a = function (arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };
// console.log(a([1, 2, 3, 4, 5, 6, 7]));

// Using IIFE funciton :

// var result = [];
// (function (arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       result.push(arr[i]);
//     }
//   }
//   console.log(result);
// })([1, 2, 3, 4, 5,6,7]);

// Using Arrow function funciton :

// var result = [];
// var a = (arr) => {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };

// console.log(a([1, 2, 3, 4, 5, 6, 7]));
// -------------------------------------------------------------------------------------------------------
//Convert all the strings to title caps in a string array :

// Using Annoymous method :

// var result = [];
// var titleCase = function (input) {
//   for (let i = 0; i < input.length; i++) {
//     let str = input[i].toLowerCase().split(" ");

//     for (var j = 0; j < str.length; j++) {
//       str[j] = str[j].charAt(0).toUpperCase() + str[j].slice(1);
//     }

//     let output = str.join(",");

//     result.push(output);
//   }
//   return result;
// };
// console.log(titleCase(["HOW","ARE","YOU"]));

// // Using IIFE method :

// var result = [];
// (function (input) {
//   for (let i = 0; i < input.length; i++) {
//     let str = input[i].toLowerCase().split(" ");

//     for (var j = 0; j < str.length; j++) {
//       str[j] = str[j].charAt(0).toUpperCase() + str[j].slice(1);
//     }

//     let output = str.join(",");

//     result.push(output);
//   }
//   console.log(result);
// })(["HOW","ARE","YOU"]);

// Using Arrow function :

// var result = [];
// var titleCase = (input) => {
//   for (var i = 0; i < input.length; i++) {
//     let str = input[i].toLowerCase().split(" ");

//     for (var j = 0; j < str.length; j++) {
//       str[j] = str[j].charAt(0).toUpperCase() + str[j].slice(1);
//     }
//     let output = str.join(",");
//     result.push(output);
//   }
//   return result;
// };
// console.log(titleCase(["HOW","ARE","YOU"]));
// ----------------------------------------------------------------------------------------------------------

// Sum of all numbers in an array

// Using annoymous function :

// var result = 0;
// var add = function (arr) {
//   for (var i = 0; i < arr.length; i++) {
//     result = result + arr[i];
//   }
//   return result;
// };
// console.log(add([1, 2, 3, 4, 5]));

// Using IIFE function :

// var result = 0;
// (function (arr) {
//   for (var i = 0; i < arr.length; i++) {
//     result = result + arr[i];
//   }
//   console.log(result);
// })([1, 2, 3, 4, 5]);

// Using Arrow function :

// var result = 0;
// var add = (arr) => {
//   for (var i = 0; i < arr.length; i++) {
//     result = result + arr[i];
//   }
//   return result;
// };
// console.log(add([1, 2, 3, 4, 5]));
// ------------------------------------------------------------------------------------------------------

// Return all the prime numbers in an array.

// Using annoymous function :

// var till = 100;
// var result = [];
// var checkPrime = function () {
//   for (var i = 2; i <= till; i = i + 1) {
//     var prime = true;

//     for (var j = 2; j < i; j = j + 1) {
//       if (i % j === 0 && j !== i) {
//         prime = false;
//       }
//     }
//     if (prime == true) {
//       console.log(i);
//     }
//   }
// };
// checkPrime();

// Using IIFE function :

// var till = 20;
// (function () {
//   for (var i = 2; i <= till; i = i + 1) {
//     var prime = true;

//     for (var j = 2; j < i; j = j + 1) {
//       if (i % j === 0 && j !== i) {
//         prime = false;
//       }
//     }
//     if (prime == true) {
//       console.log(i);
//     }
//   }
// })();

// // Using arrow function :

// var till = 20;
// var checkPrime = () => {
//   for (var i = 2; i <= till; i = i + 1) {
//     var prime = true;

//     for (var j = 2; j < i; j = j + 1) {
//       if (i % j === 0 && j !== i) {
//         prime = false;
//       }
//     }
//     if (prime == true) {
//       console.log(i);
//     }
//   }
// };
// checkPrime();
// ------------------------------------------------------------------------------------------------------

// return all the palindrome in an array.

// Ussing annoymous function :

// var result = [];
// var isPalindrome = function (arr) {
//   for (var i = 0; i < arr.length; i++) {
//     var data = arr[i].split("").reverse().join("");
//     if (data === arr[i]) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };
// console.log(isPalindrome(["dad", "level", "hello"]));

// Using IIFE function :

// var result = [];
// (function (arr) {
//   for (var i = 0; i < arr.length; i++) {
//     var data = arr[i].split("").reverse().join("");
//     if (data === arr[i]) {
//       result.push(arr[i]);
//     }
//   }
//   console.log(result);
// })(["dad", "level", "hello"]);

// Using arrow function :

// var result = [];
// var isPalindrome =  (arr) => {
//   for (var i = 0; i < arr.length; i++) {
//     var data = arr[i].split("").reverse().join("");
//     if (data === arr[i]) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };
// console.log(isPalindrome(["dad", "level", "hello"]));

// -------------------------------------------------------------------------------------------------

//Remove duplicates from an array.

// Using annoymous funciton :

// var removeDuplicates = function (arr) {
//   let uniqueArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (uniqueArray.indexOf(arr[i]) === -1) {
//       uniqueArray.push(arr[i]);
//     }
//   }
//   return uniqueArray;
// }
// console.log(removeDuplicates([1,1,2,3,3,4,5]))

// Using IIFE function :

// (function (arr) {
//   let uniqueArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (uniqueArray.indexOf(arr[i]) === -1) {
//       uniqueArray.push(arr[i]);
//     }
//   }
//   console.log(uniqueArray);
// })([1, 1, 2, 3, 3, 4, 5]);
// -------------------------------------------------------------------------------------------------------------

// Rotate an array by k times.

// Using annoymous function :

// const arr = [1, 2, 3, 4, 5];
// const K = 3;
// var Rotate = function (arr, K) {
//   for (var i = 0; i < K; i++) {
//     arr.push(arr[i]);
//   }
//   for (var i = 0; i < K; i++) {
//     arr.shift(arr[i]);
//   }
//   return arr;
// };
// console.log(Rotate(arr, K));

// Using IIFE function :

// const arr = [1, 2, 3, 4, 5];
// const K = 3;
// (function (arr, K) {
//   for (var i = 0; i < K; i++) {
//     arr.push(arr[i]);
//   }
//   for (var i = 0; i < K; i++) {
//     arr.shift(arr[i]);
//   }
//   console.log(arr);
// })(arr, K);

// ------------------------------------------------------------------------------------------------------------------

// Return median of two sorted arrays of the same size.

// Using annoymous function :

// let arr1 = [1, 3, 5, 7];
// let arr2 = [2, 4, 6, 8];
// var median = function () {
//   var arr = [...arr1, ...arr2];
//   // console.log(arr)
//   arr.sort((a, b) => a - b);
//   let n = arr.length;
//   // console.log(n);
//   if (n % 2 === 0) {
//     return (arr[n / 2] + arr[n - 2] / 2) / 2;
//   } else {
//     return arr[Math.floor](n / 2);
//   }
// };
// console.log(median(arr1, arr2));

// Using IIFE function :

// let arr1 = [1, 3, 5, 7];
// let arr2 = [2, 4, 6, 8];
//  (function () {
//     var arr = [...arr1, ...arr2];
//     // console.log(arr)
//     arr.sort((a, b) => a - b);
//     let n = arr.length;
//     // console.log(n);
//     if (n % 2 === 0) {
//       console.log((arr[n / 2] + arr[n - 2] / 2) / 2)
//     } else {
//       console.log( arr[Math.floor])(n / 2);
//     }
//   })
// (arr1, arr2);

// ---------------------------------------------------------------------------------------------------------------------
