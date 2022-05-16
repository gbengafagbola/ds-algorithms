
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    } 
    
    push(val){
        var newNode = new Node(val); 
        if(this.head === null){     // or if(!this.head) {if there is no element yet then set the head and tail to the val }
            this.head = newNode;
            this.tail = newNode;
        } else {                   // if there is an head then set the current value to the tail and the next-incoming value to the tail and the current 
            this.tail = newNode;
            this.tail.next = newNode;
        }
        this.length++;
        return this;
    }
}




// var list = new SinglyLinkedList()