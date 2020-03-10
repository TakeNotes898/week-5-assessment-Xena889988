// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) 
// Create a function that 
// takes in a string and 
// returns a coded message. 
// The coded message converts 
// 'a' to 4, 
// 'e' to 3, 
// 'i' to 1, and 
// 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"


// THIS IS THE WORKING ONE!!!!!!!!!!!!!!!!!!!!!!!!

function funcStrip(str) {
  for  (let i=0; i<str.length; i++) {
           str = str.replace('a', '4');
           str = str.replace('e', '3');
           str = str.replace('i', '1');
           str = str.replace('o', '0');
         }
    return str;
    }
console.log(funcStrip(secretCodeWord1))
console.log(funcStrip(secretCodeWord2))


// // THIS IS THE WHILE LOOP (NOT WORKING PROPEERLY)
// var secretCodeWord3 = "lackadaisical"
// var secretCodeWord4 = "gaobbledoygook"

// const funcStrip = (str) => {
    
//      while (str.includes('a' || 'e' || 'i' || 'o')){
//       str = str.replace('a', 4);
//       str = str.replace('o', 0);
//       str = str.replace('i', 1);
//       str = str.replace('e', 3);
//      }
//      return str
// }
// console.log(funcStrip(secretCodeWord3))
// console.log(funcStrip(secretCodeWord4))


// // THIS yet ANOTHER LOOP (NOT WORKING PROPEERLY)
// var secretCodeWord5 = "laooociiikadaisical"
// var secretCodeWord6 = "gobbledaygook"

// function funcStrip(str) {
//   for  (let i=0; i<str.length; i++) {
//   let newStr = str.split('').map(value => {
//     if (str.includes('a' || 'e' || 'i' || 'o' || 'u')){
//           str = str.replace('a', '4');
//           str = str.replace('e', '3');
//           str = str.replace('i', '1');
//           str = str.replace('o', '0');
//          }
//     })
//     return str;
//     }
// }
// console.log(funcStrip(secretCodeWord5))
// console.log(funcStrip(secretCodeWord6))

// // THIS IS YET ANOTHER ONE (NOT WORKING PROPEERLY)

// var secretCodeWord7 = "laooociiikadaisical"
// var secretCodeWord8 = "gobbledaygook"
// //
// function funcStrip(str) {
//   // for  (let i=0; i<str.length; i++) {
//   let newStr = str.split('').map(value => {
//      let newStr2 = value.replace(('o' || 'a'), (0 || 4))
//         return newStr2;
//     })
// return newStr.join('')
// }
// // }

// console.log(funcStrip(secretCodeWord7))
// console.log(funcStrip(secretCodeWord8))






// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.
var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"


function wantToEatFruits(arr){
let newArr = arr.filter(value => {
  if (value.includes('a') || value.includes('A'))
  return arr;
})
return newArr;
}
console.log(wantToEatFruits(arrayOfWords))


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.


// I HAVE NO IDEA HOW TO DO THIS
// AT FIRST I WANTED TO COUNT HOW MANY OF EACH INDEX IS IN THE ARRAY
// THEN I WANTED TO COMPARE 3 AND 2 DRAWS
// BUT IT IS NOT WORKING
// SO I TRYED TO CREATE THE MOST SIMPLEST THING IN THE WORLD. 
// JUST COMPARING THE '5' AND IF IT IS MORE OR LEES THAN 3 OF IT. AND THIS IS NOT WORKING EITHER


var hand1 = [5, 5, 5, 3, 3];
// Expected output: true
var hand2 = [5, 5, 3, 3, 4];
// Expected output: false


function fullHouse (arr1) {
  for  (let i=0; i<arr1.length; i++) {
  if (arr1[i] == '5' > 3)
    return true;
  else if (arr1[i] == '5' < 3);
    return false;
  }
}
console.log(fullHouse(hand1))
console.log(fullHouse(hand2))
