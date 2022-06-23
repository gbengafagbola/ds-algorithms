class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority
    }
}

class PriorityQueue {

    constructor(){
        this.values = [];
    }

    enqueue(val, priority){
        let newNode = new Node(val, priority)
        this.values.push(newNode);
        this.bubbleUp();
    }
    
    bubbleUp(){                                                         // this function is to place the inserted element into its best fit. i.e. it follows the order of 
        let idx = this.values.length - 1;
        const element = this.values[idx];

        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);

            let parent = this.values[parentIdx];

            if(element.priority >= parent.priority) break;                                      // if element is greater than parent, then swap
                
                this.values[parentIdx] = element;
                this.values[idx] = parent;

                idx = parentIdx;
        }
    }

    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();

        if(this.values.length > 0){
            this.values[0] = end
            this.bubbleDown();
        }
        
        return min;

    }

    bubbleDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;

            let leftChild, rightChild;
            let swap = null;
            

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority){
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)){
                    swap = rightChildIdx;
                }
            }

            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}



let priority = new PriorityQueue();
priority.enqueue("cold", 5); 
priority.enqueue("fever", 4); 
priority.enqueue("deep cut", 3); 
priority.enqueue("gunshot", 1); 
priority.enqueue("child birth", 2); 



// to find parent from child
// (n-1)/2

// to find children from parent
// left: 2n + 1
// right: 2n + 2