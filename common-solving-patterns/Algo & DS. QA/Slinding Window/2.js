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