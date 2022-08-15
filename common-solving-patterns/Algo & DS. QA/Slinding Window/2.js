  // Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
  // credit: codesignal.com

// my solution
function solution(inputArray) {

    let max = -Infinity;
    let i = 0;
    
    for(let j = 1; j < inputArray.length; j++){
        let temp = inputArray[i] * inputArray[j];
        if(temp > max){
            max = temp
        }
        i++;
    }
    return max;
}