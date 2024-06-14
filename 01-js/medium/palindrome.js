/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  let strlower = str.toLowerCase();
  const newstr = str.split("").reverse();
  console.log("here");
  console.log(newstr) 
   return true;
 }

module.exports = isPalindrome;


/* 

strLo = turn str into lowercase 
let str2 = strLo make it backwords 


if (str2===str1){

return true
}

else {return false}


*/