/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/


function findLargestElement(numbers) {
    let biggestNumber = 0;
    for (let index = 0; index < numbers.length; index++) {
          if (numbers[index] >= biggestNumber){
              biggestNumber = numbers[index]
          }
      }
   return biggestNumber
}

module.exports = findLargestElement;

/*
returns largest number easy


loop > 
biggest element 
if arr[n] > biggest element then biggest elem = array [n]


*/