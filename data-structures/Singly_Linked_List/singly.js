class Node{                                                         // defining our Node class of which would be instantiated in the SinglyLinkedClass where we define a node in a list of nodes
    constructor(val){
        this.val = val;                                             // refrencing the value of the passed argument as the value of the node
        this.next = null;                                           // intially we have no next node so we set to null
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

        if(!this.head){                                             // or if(this.head === null) {if there is no element yet then set the head to the value and tail to the head } #edgecase
            this.head = newNode;
            this.tail = this.head;                                  // same as setting both head and tail initially to the newNode
        } else {                                                    // if there is an head i.e the list is not empty then  
            this.tail.next = newNode;                               // next-incoming value to the tail and
            this.tail = newNode;                                    // we update the tail to ensure it points to the newNode
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;                            // #edgecase
        
        var scout = this.head;
        var upcomingTail = scout;

            while(scout.next){                                      // while there's still a next item or incoming item, 
                upcomingTail = scout;                               // upcoming now becomes scout &
                scout = scout.next                                  // scout becomes the incoming next item
            }

            this.tail = upcomingTail;                               // persist the tail
            this.tail.next = null                                   // inform that there is no connection with the just popped element by setting to null
            this.length--;                                          // update the reduction of the length due to the popped off item
            if(this.length === 0){                                  // after reducing the length to 0, we have to set the head and tail to null #edgecase
                this.head = null;
                this.tail = null;
            }
            return scout;
    }

    shift(){
        if(!this.head) return undefined;                                //#edgecase

        var currentHead = this.head;                                // instantiate the current head we want to remove
        this.head = currentHead.next;                               // set the new head to the next item in the list
        this.length--;                                              // remeber to decrement the length
        if(this.length === 0){                                      // if the length of the list is 0 then set tail to null #edgecase
            this.tail = null;
        }
        return currentHead;

    }

    unshift(val){
        var newHead = new Node(val);

        if(!this.head){                                             // or if(this.head === null) {if there is no element yet then set the head to the value and tail to the head } #edgecase
            this.head = newHead;
            this.tail = this.head;                                  // same as setting both head and tail initially to the newNode
        } else {                                                    // if there is an head i.e the list is not empty then  
            newHead.next = this.head;                               // we point the incoming node we want to add as the new head (to create a connection)
            this.head = newHead;                                    // we update the tail to ensure it points to the newNode
        }
        this.length++;
        return this;
    }

    get(val){

        if (val < 0 || val >= this.length) return null; 

        var count = 0;                                              // initialize count to keep track of what we searching for
        var node = this.head;                                       // also creating a variable to help keep track from the first item in the list which happens to be the head

        while(count !== val){                                       // while the index value we are looking for dosen't correspond with the counter we would continue looping through the list
            node = node.next;                                       // since we haven't gotten the index of the value we are looking for we set the current node to the next one as a way of working our way down the list
            count++;                                                // of course we icrement count 
        }

        return node;                                                // finally we return our node
    }

    set(index, val){
        var foundNode = this.get(index);                            // we ake use of the get method defined above to check if the index exist, which would return a boolean value of yes or no

        if(foundNode){                                              // if the index exists, replace the node at the index with the new passed in value
            foundNode.val = val;
            return true                                             // return a true stateent
        }

        return false;                                               // if index not found return false
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;          // #edgecace

        if(index === 0) return !!this.unshift(val);                 // make use of the predefined unshift method to put a node at the head of a list and return a boolean value of either true or false with the help of the !! double negate value
        if(index === this.length -1) return !!this.push(val);       // using push method to add to the end of a list returning a boolean which can also be written as if(index === this.length -1){ this.push(val); return true};
                                                                    
        var newNode = new Node(val);                                // lets create a new node which would take in the value. that we want to insert inbetween previous node and newNode.next
        var preNode = this.get(index-1);                            // we ake use of the get method defined above to check if the index exist, which would return a boolean value of yes or no and save as the preceding node 
        var tempNode = preNode.next;                                // we create a temporary node to save the next node that is after the previous node so we wouldn't override it
        preNode.next = newNode;                                     // then we replace the next node after preNode with the newNode
        newNode.next = tempNode;                                    // what should come after the newnode has been placed should be the tempNode(which was the previous nextNode after preNode)
        this.length++;
        return true;
    }

    delete(index){
        if(index < 0 || index > this.length) return false;         // #edgecace

        if(index === 0) return !!this.shift(val);                  // make use of the predefined unshift method to put a node at the head of a list and return a boolean value of either true or false with the help of the !! double negate value
        if(index === this.length -1) return !!this.pop(val);       // using push method to add to the end of a list returning a boolean which can also be written as if(index === this.length -1){ this.push(val); return true};

        var preNode = this.get(index-1);                           // we make use of the get method defined above to check if the index exist, which would return a boolean value of yes or no and save as the preceding node 
        var currentNode = preNode.next;                            // we set the preceding preNode as the currentNode in question

        preNode.next = currentNode.next;
        this.length--;
        return true;
    }

    reverse(){
        var node = this.head;                                     // we initialize the node at the head in other to swap the head and tail
        this.head = this.tail;                                    //  swapping..
        this.tail = node;                                         // swapping... tail is now head

        var prev = null;                                          // tail.next has to be null
        var next;                                                 // next is initialized
        
        for(var i = 0; i < this.length; i++){
            next = node.next;                                     // we have to set the next as the next-in-line node from the present node
            node.next = prev;                                     // in other to have the right relationship, we have to ensure the current node points to the next value which happens to be the previous node

            prev = node;                                          // now we set the previous node as the node we are looking at
            node = next                                           // and we set the node to the next item
        }

        return this;

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


var list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
