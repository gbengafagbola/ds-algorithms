class Node {                                    
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {                    
    constructor(){
        this.root = null
    }

    insert(value){                                              // inserting into our tree depending on the value of the node to ensure it meet the criteria
        var newNode = new Node(value);

        if(this.root === null){                                 // if there is no root therefore make the newNode the root
            this.root = newNode;
            return this;
        } else {                                                 // if there is a root node, 
            var current = this.root;                             // create a current variable to help keep track of the nodes
            while(true){                                         // since its iterative, this helps check if a certain condition has been met

                if(value === current.value) return undefined;    // if the h already exists, then return the count

                if(value < current.value){                       // if the value of the newNode is less that the current node, that means it has to go on the left hand side of the node 
                    if(current.left === null){                   // if there is no value at the left, the we make the newNode current.left 
                        current.left = newNode;
                        return this;
                    } else {                                     // if current has a left already, we would make its left the new currnet and look to the left of that 
                        current = current.left;
                    }
                } else if(value > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    search(value){
        if(this.root === null) return false;                   // if no node return false

        var current = this.root;                               // the node we looking at 
        var found = false;                                     // to track if node as been found

        while(current && !found){                              // for as long as we have a node to look at and check if the node has been found
            if(value < current.value){
                current = current.left;
            } else if (value > current.value){
                current = current.right;
            } else {
                found = true
            }
        } 

        if(!found) return undefined;
        return current;
    }

    BFS(){
        var data = [];                                  // what we would return at the end
        var queue = [];                                 // would help us keep track of what comes next
        var node = this.root;                           // we made the node the root
        
        queue.push(node);                               // and we pushed it into the queue

        while(queue.length){                            // while queue is not empty
            node = queue.shift();                       // now we make node equals to the node we remove from the begining of the list
            data.push(node.value);                      // we now push the node inside the data array we would return

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        return data;
    }

    DFSPreOrder(){
        var data = [];

        function traverse(node){                        // a recursive function that starts with the root node and moves it way downward recursively 
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }

        traverse(this.root);
        return data;
    }

    DFSPostOrder(){
        var data = [];

        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);

            data.push(node.value);
        }

        traverse(this.root);
        return data;
    }

    DFSPinOrder(){
        var data = [];

        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }

        traverse(this.root);
        return data;
    }
}





var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

// this should help u visualize the result of the BST 

//          10
//        5     13
//      2  7   11  16


//  BIG O
// insertion O(logn)
// searching O(logn)

// although not guaranteed for the worst case