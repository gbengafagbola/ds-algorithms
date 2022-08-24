
function solution(numbers) {
    let result = [];
    
    for(let i = 0; i < numbers.length - 2; i++){
        if(numbers[i] < numbers[i+1] && numbers[i+1] > numbers[i+2]){
            result.push(1)
        } else if(numbers[i] > numbers[i+1] && numbers[i+1] < numbers[i+2]){
            result.push(1)
        } else {
            result.push(0)
        }
    }

    return(result)    
}
