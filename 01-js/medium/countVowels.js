/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let str1 =  str.toLowerCase();
    let str2 = "aeiou"
    let totalVowels = 0
   for (let i = 0; i < str1.length; i++) {
      if(str2.includes(str1[i])){
     totalVowels++ 
    }
   }
  return totalVowels
}
module.exports = countVowels;


/* number of vowels = 0;

first turn all into lowercase

if (stri.contains = a | .... )
{
number of vowels += 1;
}

return number of vowels

*/