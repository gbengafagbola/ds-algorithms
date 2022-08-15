// Given an integer array and a window of size w, find the current maximum value in the window as it slides through the entire array.
// question credit: educative.io, https://www.educative.io/module/lesson/data-structures-in-javascript/xlD0J44Pzqq

// my solution
let findMaxSlidingWindow = function(nums, windowSize) {
    var result = [];

    if(nums.length == 0) {
        return result;
      }

      if (windowSize > nums.length) {
        windowSize = nums.length;
      }  

    let i = 0;
    let j = windowSize;
  
      while(i <= nums.length - windowSize){   
          const temp = nums.slice(i, j);
          result.push(Math.max(...temp));
          i++; j++;
      }
      return result; 
  };

//   test case
  findMaxSlidingWindow([10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67],2)



// their code - approach using deque ds
//   let findMaxSlidingWindow = function(nums, windowSize) {
//     let result = [];
    
//     // Return empty list
//     if(nums.length == 0) {
//       return result;
//     }
//     // If window_size is greater than the array size,
//     // set the window_size to nums.size()
//     if (windowSize > nums.length) {
//       windowSize = nums.length;
//     }
//     // Initializing doubly ended queue for storing indices using array
//     let window = [];
  
//     //find out max for first window
//     for (let i = 0; i < windowSize; i++) {
//       // For every element, remove the previous smaller elements from window
//       while (window.length > 0 && nums[i] >= nums[window[window.length - 1]]) {
//         window.pop();
//       } 
//       // Add current element at the back of the queue
//       window.push(i);
//     }
//     // Appending the largest element in the window to the result
//     result.push(nums[window[0]])
    
//     for (let i = windowSize; i < nums.length; i++) {
//       // remove all numbers that are smaller than current number
//       // from the tail of list
//       while (window.length > 0 && nums[i] >= nums[window[window.length - 1]]) {
//         window.pop();
//       }
      
//       // Remove first index from the window deque if 
//       // it doesn't fall in the current window anymore
//       if (window.length > 0 && (window[0] <= i - windowSize)) {
//         window.shift();
//       }
//       // Add current element at the back of the queue
//       window.push(i);
//       result.push(nums[window[0]]);
//     } 
//     return result;
//   };