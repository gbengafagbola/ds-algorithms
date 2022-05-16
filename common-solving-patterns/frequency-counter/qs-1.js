
//Question1: write a function called same that accepts 2-arrays. the fuction should return true if every value in the array has its corresponding value squared in the second array
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
//same([1,2,3,2,5],[4,9,4,1]) // true

// Time Complexity : O(N**2)


// Solution 2
function same(arr1, arr2) {

    if (arr1.length !== arr2.length){
        return false;    
    }
    
    let freqCounter1 = {};
    let freqCounter2 = {};

    for(let val of arr1){
        freqCounter1[val] = (freqCounter1[val] || 0) +1      
    }

    for(let val of arr2){
        freqCounter2[val] = (freqCounter2[val] || 0) +1      
    }

    
    for(let key in freqCounter1){
        
        if(!(key ** 2 in freqCounter2)){
            return false
        }

        if(freqCounter2[key ** 2] !== freqCounter1[key]) {
            return false;
        }
    }
    
   return true;
   
}


// test case
//same([1,2,3,2,5],[4,9,4,1]) //false
// same([1,2,3,2,5],[9,1,4,4,11]) //false

// Time Complexity : O(N)





