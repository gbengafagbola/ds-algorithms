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