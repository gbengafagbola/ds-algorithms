// creating queue with array

var que = [];


que.unshift(x);
//  ie que.unshift(1) followed by unshift(2) unshift(3)
// since unshift add an item to the beginning of a list

que = [3, 2, 1];

// so to pop would ensure the first in first out principle with 


// so we would add to the end(tail) of the list and remove from the begining(head)
class Node {
    constructor(value){
        this.value = this.value;
        this.next = null
    }
}


class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size;
    }

    enqueue(val){                           // this would add to the end of our list
        var newNode = new Node(val);

        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){                              // this would remove from the begining of our list
        if(!this.first) return null;

        var temp = this.first;

        if(this.first === this.last) {
            this.last = null;
        } 
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}