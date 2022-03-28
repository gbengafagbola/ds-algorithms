// Given 2 Strings, write a function to determine if the second string is an anagram of the first. an anagram is a word or, phrase, or name formed by rearranging the letters of another, such as RAT is an anagram of TAR

// Solution 1
function anagram(first, second){
    
    if(first.length !== second.length){
        return false;
    }

    const lookup = {}; 

    for(let i = 0; i < first.length; i++){
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    

    for (let i = 0; i < second.length; i++){
        let letter = second[i];

        if(!(lookup[letter])) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
        
    return true
}


// Solution 2 

function anagrams(first, second) {

    if(first.length !== second.length){
        return false;
    }


    let freqCounter1 = {};
    let freqCounter2 = {};

    for(let val of first){
        freqCounter1[val] = (freqCounter1[val] || 0) +1
    }

    for(let val of second){
        freqCounter2[val] = (freqCounter2[val] || 0) +1
    }

    console.log(freqCounter1);
    console.log(freqCounter2);

    for(let key in freqCounter1){
        if(!(freqCounter2.hasOwnProperty(key))){
            return false
        }

        if(freqCounter1.values !== freqCounter2.values){
            return false;
        }
    }

    return true;
}

// test case
anagrams('bazy', 'bzay')