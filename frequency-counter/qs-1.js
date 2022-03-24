//Question: write a function called same that accepts 2-arrays. the fuction should return true if every value in the array has its corresponding value squared in the second array
// such that
// same([1,2,3],(4,1,9)) //true
// same ([1,2,1],[4,4,1]) // false


// Solution 1
function same(arr1, arr2) {
    
    if(arr1.length !== arr2.length){
        return false;
    }

   for(let i = 0; i < arr1.length; i++){
       let correctIndex = arr2.indexOf(arr1[i] **2);

       if(correctIndex === -1){
           return false;
       } else {
           arr2.splice(correctIndex, 1)
       }
   }

   return true;
   
}

// test case
//same([1,2,3,2,5],[4,9,4,1])

// Time Complexity : O(N**2)