

class Node {                                            // class initialization for Node
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null
    }
}



class DoublyLinkedList {                               // doubly linked class
    constructor(){
        this.head = null;                              // blue print of head & tail stating out as null with lenght @ 0
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val);

        if(this.length === 0){                         // if no item make head and tail equals to newNode
            this.head = newNode;
            this.tail = newNode
        } else {

            this.tail.next = newNode;                  // the pre-existing tail next value would be our newNode 
            newNode.prev = this.tail;                  // while our preceding new node would be linked to the pre-existing tail
            this.tail = newNode;                       // and finally we get to set the new tail as the newNode
        }

        this.length++;                                 // dont forget to increment

        return this;                                   // return list
    }


    pop(){
        if(this.length === 0) return undefined;         // if the list is empty return undefined. nothing to pop

        if(this.length === 1){                          // if the list has one item, set head & tail to null
            this.head = null;
            this.tail = null;
        } else {
            var poppedTail = this.tail;
            var newTail = this.tail.prev;               // store the node before the current tale inside a variable as the new tail
            newTail.next = null;                        // sever the connection to the old tail but setting the next to null
            this.tail.prev = null;                      // also sever old tail to the previous node
            this.tail = newTail;                        // finally set the tail to the newtail
        }

        this.length--;                                  // decrement
        return poppedTail;                                    
    }



    // pop(){
    //     if(!this.head) return undefined;

    //     var poppedTail = this.tail;

    //     if(this.length === 1){                        
    //         this.head = null;
    //         this.tail = null;
    //     } else {
        
    //         this.tail = poppedTail.prev;
    //         this.tail.next = null;
    //         poppedTail.prev = null;
    //     }

    //     this.length--;                                 
    //     return poppedTail;                                    
    // }  



    shift(){
        if(this.length === 0) return undefined;         // if the list is empty return undefined. nothing to pop
        
        var shiftedHead = this.head;                    // the about to be exiled head

        if(this.length === 1){                          // if the list has one item, set head & tail to null
            this.head = null;
            this.tail = null;
        } else {

            var newHead = this.head.next;                // the to be head would be the next of the currrent head
            this.head.next = null;                       // we have to sever the tie to the next by making it null
            newHead.prev = null;                         // also for the newHead by making the prev null
            this.head = newHead;                         // then we make the head the newHead
        }
        this.length--;                                   // decrement 
        return shiftedHead;                              // return the shifted head
    }



    // shift(){

    //     if(this.length === 0) return undefined;         // if the list is empty return undefined. nothing to pop
        
    //     var oldHead = this.head;

    //     if(this.length === 1){                          // if the list has one item, set head & tail to null
    //         this.head = null;
    //         this.tail = null;
    //     } 
    //         this.head = oldHead.next;
    //         this.head.prev = null;
    //         oldHead.next = null;
            
    //         this.length--;                               // decrement 
    //         return shiftedHead;                          // return the shifted head
    // }


    unshift(val){

        var newHead = new Node(val);

        if(this.length === 0){
            this.head = newHead;
            this.tail = newHead
        }

        newHead.next = this.head;                       // making a connection to the current head
        this.head.prev = newHead;                       // same here making the previous point to the new head
        this.head = newHead;                            // now declearing the head as the the new head

        this.length++;
        return this;
    }


    // unshift(val){

    //     var newHead = new Node(val);

    //     if(this.length === 0){
    //         this.head = newHead;
    //         this.tail = newHead
    //     } else {
    //         this.head.prev = newHead;
    //         newHead.next = this.head;
    //         this.head = newHead;
    //     }

    //     this.length++;
    //     return this;

    // }
    

    // try using multiple pointer 
    get(index){
        if(index < 0 || index >= this.length) return undefined;
        
        // from the start 
        if(index <= this.length/2){                                 // by now you should get familiar with the approach, but
        var count = 0;
        var current = this.head;                                    // the jist is that since we have a 2-way traffic, we can improve the get functionality by check from both ends depending on the index

        while(count !== index){
            current = current.next;
            count++; 
            }

        // from the end 
        } else {
            var count = this.length - 1;
            var current = this.tail;

            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set(index, val){                                                // check singly while employ get method
        var foundNode = this.get(index);

        if(foundNode){
            foundNode.val = val;
            return true;
        }

        return false; 
    }


    insert(index, val){
        if(index < 0 || index > this.length) return undefined;

        var newNode = new Node(val);

        if(index === 0) return this.unshift(newNode);

        if(index === this.length) return this.push(newNode);

        var targetNode = this.get(index-1);
        var currentNode = targetNode.next;

            targetNode.next = newNode;
            newNode.prev = targetNode;
            newNode.next = currentNode;
            currentNode.prev = newNode;

        this.length++;
        return true;
    }

    print(){
        var arr = [];
        var current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next
        }
        console.log(arr)
    }

}





var list = new DoublyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)