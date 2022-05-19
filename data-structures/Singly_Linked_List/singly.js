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

        if(!this.head){                    // or if(this.head === null) {if there is no element yet then set the head to the value and tail to the head } #edgecase
            this.head = newNode;
            this.tail = this.head;         // same as setting both head and tail initially to the newNode
        } else {                           // if there is an head i.e the list is not empty then  
            this.tail.next = newNode;      // next-incoming value to the tail and
            this.tail = newNode;           // we update the tail to ensure it points to the newNode
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;   //#edgecase
        
        var scout = this.head;
        var upcomingTail = scout;

            while(scout.next){             // while there's still a next item or incoming item, 
                upcomingTail = scout;      // upcoming now becomes scout &
                scout = scout.next         // scout becomes the incoming next item
            }

            this.tail = upcomingTail;     // persist the tail
            this.tail.next = null         // inform that there is no connection with the just popped element by setting to null
            this.length--;                // update the reduction of the length due to the popped off item
            if(this.length === 0){        // after reducing the length to 0, we have to set the head and tail to null #edgecase
                this.head = null;
                this.tail = null;
            }
            return scout;
    }

    shift(){
        if(!this.head) return undefined;    //#edgecase

        var currentHead = this.head;       // instantiate the current head we want to remove
        this.head = currentHead.next;       // set the new head to the next item in the list
        this.length--;                     // remeber to decrement the length
        if(this.length === 0){             // if the length of the list is 0 then set tail to null #edgecase
            this.tail = null;
        }
        return currentHead;

    }

    unshift(val){
        var newHead = new Node(val);

        if(!this.head){                    // or if(this.head === null) {if there is no element yet then set the head to the value and tail to the head } #edgecase
            this.head = newHead;
            this.tail = this.head;         // same as setting both head and tail initially to the newNode
        } else {                           // if there is an head i.e the list is not empty then  
            newHead.next = this.head;      // we point the incoming node we want to add as the new head (to create a connection)
            this.head = newHead;           // we update the tail to ensure it points to the newNode
        }
        this.length++;
        return this;
    }

}


var list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
