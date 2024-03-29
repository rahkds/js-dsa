class Queue {
    constructor() {
        this.itemObj = {};
        this.startIdx = 0;
        this.endIdx = -1;
    }
    
    enqueue(val) {
        this.itemObj[++this.endIdx] = val;
    }
    
    dequeue() {
        if(this.empty()) return;
        delete this.itemObj[this.startIdx++];
    }
    
    front() {
        if(this.empty()) return;
        return this.itemObj[this.startIdx];
    }
    
    back() {
        if(this.empty()) return;
        return this.itemObj[this.endIdx];
    }
    
    empty() {
        return this.startIdx > this.endIdx;
    }
}


let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q.front(), q.back())

q.dequeue();
console.log(q.front(), q.back())
q.dequeue();
console.log(q.front(), q.back())
q.dequeue();
console.log(q.front(), q.back())