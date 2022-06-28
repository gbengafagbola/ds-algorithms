function Hash(key, arrayLength){

    let total = 0;

    for(char of key){
        // i.e map "a" -> 1, "b" -> 2, "c" -> 3 etc.

        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLength;
    }

    return total;
}

// this function only works for strings
// its not constant time. that a larger string would take a longer time
// could be more random / scathered








// making use of prime number to improve our code by reducing collision by spreading data out

function hash(key, arrayLength){
    let total = 0;

    let WEIRD_PRIME = 31;

    for(let i = 0; i < Math.min(key.length, 100); i++){
        let char = key[i];

        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLength;
    }

    return total
}

// ds for hash 
// implemented by seperating chain

class HashTable {

    constructor(size=53){
        this.keyMap = new Array(size);
    }

    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
    
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }

        return total
    }
}