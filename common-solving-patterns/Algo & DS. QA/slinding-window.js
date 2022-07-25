// Given an integer array and a window of size w, find the current maximum value in the window as it slides through the entire array.


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