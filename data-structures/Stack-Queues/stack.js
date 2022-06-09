

class Node {
    constructor(value){
        this.value = value;
        this.next = null; 
    }
}


class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;                             // same as using this.length
    }

    push(val){
        var newNode = new Node(val);
        if(!this.first){                            // if empty, set first and last as node
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;                  // save the first into varaible for easy reassignment
            this.first = newNode;
            this.first.next = temp;
        }

            return ++this.size;                     // increase the size and return

    }


    pop(){
        if(this.size === 0) return null;

        var temp = this.first;                      // a temporary variable so save this.first
        if(this.first === this.last){               // if only one node update last to null
            this.last = null; 
        }

        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}



var list = new Stack()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)


// BIG O
// Insertion O(1)
// Removal O(1)
// Searching O(N)
// Access O(N)
