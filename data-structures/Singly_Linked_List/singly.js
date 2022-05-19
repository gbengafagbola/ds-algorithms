
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
        if(!this.head){                     // or if(this.head === null) {if there is no element yet then set the head and tail to the val }
            this.head = newNode;
            this.tail = newNode;
        } else {                           // if there is an head then set the current value to the tail and the next-incoming value to the tail and the current 
            this.tail = newNode;
            this.tail.next = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        
        var scout = this.head;
        var upcomingTail = scout;

            while(scout.next){             // while there's still a next item or incoming item, 
                upcomingTail = scout;      // upcoming now becomes scout &
                scout = scout.next         // scout becomes the incoming next item
            }

            this.tail = upcomingTail;     // persist the tail
            this.tail.next = null         // inform that there is no connection with the just popped element by setting to null
            this.length--;                // update the reduction of the length due to the popped off item
            if(this.length === 0){        // after reducing the length to 0, we have to set the head and tail to null
                this.head = null;
                this.tail = null
            }
            return scout;
        }
}




// var list = new SinglyLinkedList()