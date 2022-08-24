// My 1st approach - solution
let findMaxSlidingWindow = function(nums, windowSize) {
  // instantiate an empty array that would be retured later 
    var result = [];
    // EDGE CASES
    //  if nums is empty return result (which of course would be empty)
    if(nums.length == 0) {
        return result;
      }
      // if the windowSize is less than the array length, make the windowSize the length of the array
      if (windowSize > nums.length) {
        windowSize = nums.length;
      }  

    // CORE LOGIC
    // instantiate i as 0 and j as the size of the window
    let i = 0;
    let j = windowSize;
      
      // while i is less or equals the array length subtracted from the windowSize, 
      // create a constant to store the numbers of i to j(which is the windowSize)
      // find the max from the temporary storage and push the value into result
      // increment i and j to keep the loop going
      while(i <= nums.length - windowSize){   
          const temp = nums.slice(i, j);
          result.push(Math.max(...temp));
          i++; j++;
      }

      // return the result
      return result; 
  };


// my 2nd approach/solution implementing the deque technique
  let findMaxSlidingWindow2 = function(nums, windowSize) {
  
    let result = [];

        // EDGE CASES
    //  if nums is empty return result (which of course would be empty)
    if(nums.length == 0) {
      return result;
    }
    // if the windowSize is less than the array length, make the windowSize the length of the array
    if (windowSize > nums.length) {
      windowSize = nums.length;
    }  

    // instatiate the window that would save the largest number in the windowSize rage at the front and the smallest at the back.
    //  and i as 0
    let window = [0];
    let i = 0;

    for(let j = 1; j < nums.length; j++){

      // if windowSize is less than 1 return the array of nums
        if(windowSize <= 1){
            return nums
        }
        
        // if j subtracted from the windowSize strictly equal the first element in the window (which is the largest of all),
        //  then remove from window since its now beyond the range of the windowSize. that is shift removal from front
        if(j - windowSize === window[0]) {
          window.shift();
        } 
        
        // below are condition to add/remove element into window
        // 1. if j is greater than the max in window and i also. then remove all element in window and make j the only element
        // 2. if j is greater than i, replace the value of i in widnows with that of j
        // 3. if i is greater than j then push i into window
        if(nums[j] >= nums[window[0]] && nums[j] > nums[i]){
            window = [j]
        } else if(nums[j] > nums[i]){
            window[i-1] = j;
        } else if(nums[j] < nums[i]){
            window.push(j)
      }

      // if j+1 is greater than the windowSize then we can populate our result array with max value from the range of windowSize
        if(j+1 >= windowSize){
            result.push(nums[window[0]])
        }

        // increment i
        i++;
    }
    // return result
    return result;
}



// their code - approach using deque ds
  let findMaxSlidingWindow3 = function(nums, windowSize) {
    let result = [];
    
    // Return empty list
    if(nums.length == 0) {
      return result;
    }
    // If window_size is greater than the array size,
    // set the window_size to nums.size()
    if (windowSize > nums.length) {
      windowSize = nums.length;
    }
    // Initializing doubly ended queue for storing indices using array
    let window = [];
  
    //find out max for first window
    for (let i = 0; i < windowSize; i++) {
      // For every element, remove the previous smaller elements from window
      while (window.length > 0 && nums[i] >= nums[window[window.length - 1]]) {
        window.pop();
      } 
      // Add current element at the back of the queue
      window.push(i);
    }
    // Appending the largest element in the window to the result
    result.push(nums[window[0]])
    
    for (let i = windowSize; i < nums.length; i++) {
      // remove all numbers that are smaller than current number
      // from the tail of list
      while (window.length > 0 && nums[i] >= nums[window[window.length - 1]]) {
        window.pop();
      }
      
      // Remove first index from the window deque if 
      // it doesn't fall in the current window anymore
      if (window.length > 0 && (window[0] <= i - windowSize)) {
        window.shift();
      }
      // Add current element at the back of the queue
      window.push(i);
      result.push(nums[window[0]]);
    } 
    return result;
  };


  //   test cases
findMaxSlidingWindow([10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67],2)
// findMaxSlidingWindow([4, 5, 6, 1, 2, 3],1)
// findMaxSlidingWindow([-4, 2, -5, 1, -1, 6],3)