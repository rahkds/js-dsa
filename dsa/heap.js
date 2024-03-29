class MinHeap {
    constructor() {
        this.heap = [];
    }

    getLeftChildIndex(i) {
        return 2*i+1;
    }
    
    getRightChildIndex(i) {
        return 2*i+2;
    }

    hasLeftChild(i) {
        return this.getLeftChildIndex(i) < this.heap.length; 
    }

    hasRightChild(i) {
        return this.getRightChildIndex(i) < this.heap.length;
    }

    hasParent(i) {
        return this.getParentIndex(i) >= 0;
    }

    getParentIndex(i) {
        return Math.floor((i-1)/2);
    }

    top() {
        if(this.heap.length == 0) return null;
        return this.heap.at(0);
    }

    add(item) {
        this.heap.push(item);
        this.heapifyUp(this.heap.length-1);
    }

    swap(i,j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    leftChild(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }
 
    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)];
    }

    heapifyUp(i) {
        while(i >= 0 && this.heap[this.getParentIndex(i)] > this.heap[i]) {
            this.swap(this.getParentIndex(i), i);
            i = this.getParentIndex(i);
        }
    }

    heapifyDown(i) {
        if(this.hasLeftChild(i)) {
            let idx = this.getLeftChildIndex(i);
            if(this.hasRightChild(i)  && this.heap[idx] > this.heap[this.getRightChildIndex(i)]) {
                idx = this.getRightChildIndex(i);
            }
            if(this.heap[idx] > this.heap[i]) idx = i;

            if(i != idx) {
                this.swap(i,idx);
                this.heapifyDown(idx);
            }
        }     
    }    

    pop() {
        if(this.heap.length == 0) return null;
        let value = this.heap.at(0);
        this.heap[0] = this.heap.at(-1);
        this.heap.pop();
        this.heapifyDown(0);
        return value;
    }

    empty() {
        if(this.heap.length == 0) return true;
        return false;
    }
}


class MaxHeap {
    constructor() {
        this.items = [];
    }
    
    getLeftChildIdx(i) {
        return 2*i+1;
    }

    getRigthChildIdx(i) {
        return 2*i+2;
    }    
    
    getParentIdx(i) {
        return Math.floor((i-1)/2);
    }
    
    hasLeftChild(i) {
        return this.getLeftChildIdx(i) < this.items.length;
    }
    
    hasRightChild(i) {
        return this.getRigthChildIdx(i) < this.items.length;
    }    
    
    hasParent(i) {
        return this.getParentIdx(i) >= 0;
    }
    
    empty() {
        return this.items.length === 0;
    }
    
    push(val) {
        this.items.push(val);
        let idx = this.items.length-1;
        this.heapifyUp(idx);
    }
    
    swap(i,j) {
        [this.items[i],this.items[j]] = [this.items[j], this.items[i]];
    }
    
    top() {
        if(this.empty()) return null;
        return this.items.at(0);
    }
    
    heapifyUp(i) {
        while(this.hasParent(i) && this.items[i] > this.items[this.getParentIdx(i)]) {
            this.swap(i,this.getParentIdx(i));
            i = this.getParentIdx(i);
        }
    }
    
    heapifyDown(i) {
        let l = i;
        if(this.hasLeftChild(i) && this.items[i] < this.items[this.getLeftChildIdx(i)]) {
            l = this.getLeftChildIdx(i);
        }
        
        if(this.hasRightChild(i) && this.items[i] < this.items[this.getRigthChildIdx(i)]) {
            l = this.getRigthChildIdx(i);
        }        
        
        if(l != i) {
            this.swap(l,i);
            this.heapifyDown(l);
        }
    }
    
    pop() {
        if(this.empty()) return;
        this.items[0] = this.items.at(-1);
        this.items.pop();
        this.heapifyDown(0);
    }
    
};
let pq = new MinHeap();


pq.add(8);
pq.add(1);
pq.add(9);
pq.add(8);
pq.add(11);

pq.add(2);


pq.add(7);
pq.add(12);
// pq.add(5);

while(!pq.empty()) {
    console.log(pq.pop());
}