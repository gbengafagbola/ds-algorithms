// A string that doesn't changed when reversed (it reads the same backward and forward).
//  eye is a palidrome


function solution(inputString) {
    let comparison = [];
    
    for(let i = 0; i < inputString.length; i++){
        comparison.unshift(inputString[i]);
    }

    let compare = comparison.join("");

    if(inputString.valueOf() !== compare.valueOf()) return false;
    return true;
}




solution('abac');