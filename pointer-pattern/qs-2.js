// Write a function thqat count the unique numbers in an array

// Method 1  
function countUnique(arr) {

    let counter = {};
    let count = [];
    
    for(let val of arr){

        counter[val] = (counter[val] || 0) +1;     
    }


    for(let key in counter){
        count.push(key)
    }

    return count.length;
}

 // test caseg
// countUnique([-2,-1,-3,1])


// Method 2 the guy
