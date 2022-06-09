

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

}



var list = new Stack()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)



