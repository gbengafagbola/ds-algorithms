

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