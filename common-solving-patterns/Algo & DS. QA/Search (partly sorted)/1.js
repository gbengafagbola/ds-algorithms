// naieve approach sort of

// let binarySearchRotated = function(nums, target) {
//     //TODO: Write - Your - Code
//     for(let i = 0; i < nums.length; i++){
//       if(nums[i] === target){
//         return i
//       }
//     }
//     return -1;
//   };



  let binarySearchRotated = function(nums, target) {

    let low = 0;
    let mid = Math.floor(nums.length/2);
    let high = nums.length -1;

    if(target === nums[mid]){
        return target
    }

    // lets first ensure the expected sorted part of the array is within the range of the target
    if(target > nums[mid] && target > high){
        low = 0;
        high = mid -1;
        mid = Math.floor(high/2);
    }

    // if(target < )



  }


  binarySearchRotated([176, 188, 199, 200, 210, 222, 1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162], 200)