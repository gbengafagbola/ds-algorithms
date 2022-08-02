// Given an integer array and a window of size w, find the current maximum value in the window as it slides through the entire array.
// question credit: educative.io

// my solution
let findMaxSlidingWindow = function(nums, windowSize) {
    var result = [];

    if(nums.length == 0) {
        return result;
      }

    //   if windown size is greater than nums array
      if (windowSize > nums.length) {
        windowSize = nums.length;
      }  

    //Write your code
    let i = 0;
    let j = windowSize;
  
      while(i <= nums.length - windowSize){   
          const temp = nums.slice(i, j);
          result.push(Math.max(...temp));
          i++; j++;
      }
  
      return result; 
  };


  // their approach my code
// let findMaxSlidingWindow2 = function(nums, windowSize) {

//   let window = [0];
//   let result = [];




// }



  // Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
  // credit: codesignal.com

// my solution
  function solution(inputArray) {

    let max = -Infinity;
    let i = 0;
    
    for(let j = 1; j < inputArray.length; j++){
        let temp = inputArray[i]* inputArray[j];
        if(temp > max){
            max = temp
        }
        i++;
    }
    return max;
}