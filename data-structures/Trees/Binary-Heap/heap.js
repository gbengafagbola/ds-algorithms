class MaxBinaryHeap {

    constructor(){
        this.values = [];
    }

    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    
    bubbleUp(){                                                         // this function is to place the inserted element into its best fit. i.e. it follows the order of 
        let idx = this.values.length - 1;
        const element = this.values[idx];

        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);

            let parent = this.values[parentIdx];

            if(element <= parent) break;                                      // if element is greater than parent, then swap
                
                this.values[parentIdx] = element;
                this.values[idx] = parent;

                idx = parentIdx;
        }
    }

    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();

        if(this.values.length > 0){
            this.values[0] = end
            this.bubbleDown();
        }

        return max;

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
                if(leftChild > element){
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)){
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


let heap = new MaxBinaryHeap();
heap.insert(41); 
heap.insert(39); 
heap.insert(33); 
heap.insert(18); 
heap.insert(27); 
heap.insert(12); 

// for visualization sake
//          41
//      39       33
//    18  27    15


// [41, 39, 33, 18, 27, 12]


// to find parent from child
// (n-1)/2

// to find children from parent
// left: 2n + 1
// right: 2n + 2



// BIG O

// insertion O(log n)
// Deletion O(log n)
// Searching O(n)