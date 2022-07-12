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

    constructor(size=53){                                       //default size for how large the size table should be 53 as a prime number
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



    set(key, value){
        let index = this._hash(key);
        if(!this.keyMap[index]){                                //if there's nothing there, set it to an empty array
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);                  // else push key and value i
    }

    get(key){
        let index = this._hash(key);
        if(this.keyMap[index]){
            for(let i = 0; i < this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined;
    }

}


let hashTable = new HashTable();

hashTable.set("hello world 0");
hashTable.set("hello world 1");
hashTable.set("hello world 2");
hashTable.set("hello world 3");
hashTable.set("hello world 4");
hashTable.set("hello world 5");