/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function isAnagram(str1, str2) {
  let t = 0
  let f = 0
  for (let i = 0; i < str1.length; i++) {
      if (str2.includes(str1[i])) {
          t++
      } else {
          f++
      }
  }
  if (t == str1.length) {
      return "true"
  }
  else {
      return "false"
  }
}


module.exports = isAnagram;

/*logic 

first string will take input as anagram (rasp) 
another will take rearranged word 

then we will put  
if, else

stringMethod.contains 
maybe we need a loop for this
*/
