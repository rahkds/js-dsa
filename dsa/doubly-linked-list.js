class Node {
    constructor(value,next,prev) {
        this.value = value
        this.next = next || null;
        this.prev = prev || null;
    }
}

class DoubleLinkedList {
    constructor(){
        this.head = this.tail = null;
        this.size = 0;
    }
    
    push_back(value) {
        this.size++;
        let newNode = new Node(value);
        if(this.head == null) {
            this.head = this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = this.tail.next;
        
    }
    
    push_front(value) {
        this.size++;
        let newNode = new Node(value);
        if(this.head == null) {
            this.head = this.tail = newNode;
            return;
        } 
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }  
    
    
    isEmpty() {
        return this.head === null;
    }
    
    pop_back() {
        if(this.isEmpty()) return;
        this.size--;
        if(this.head === this.tail) {
            this.head = this.tail = null;
            return;
        }
        let temp = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        temp.prev = null;
    }
    
    
    pop_front() {
        if(this.isEmpty()) return;
        this.size--;
        if(this.head === this.tail) {
            this.head = this.tail = null;
            return;
        }
        let temp = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        temp.next = null;
    }
    
    front() {
        return this.head;
    }
    
    back() {
        return this.tail;
    }
    
    erase(node) {
        if(!node) return;
        this.size--;
        let prev = node.prev;
        let next = node.next;
        if(this.head === node) {
            if(this.head === this.tail) {
                this.head = this.tail = null;
            } else {
                this.head = node.next;
            }
            
        }
        if(prev) {
            prev.next = next;
        }
        if(next) {
            next.prev = prev;
        }
        node.next = node.prev = null;
    }
    
    print() {
        let temp = this.head;
        let arr = [];
        while(temp) {
            arr.push(temp.value);
            temp = temp.next;
        }
        console.log(arr);
    }

    length() {
        return this.size;
    }
}




let list = new DoubleLinkedList();

list.push_back(1);
list.push_back(2);
console.log(list.front().value, "::", list.back().value);
list.push_back(3);
console.log(list.front().value, "::", list.back().value);
list.push_front(4);
console.log(list.front().value, "::", list.back().value);
list.print();

list.erase(list.head.next);
list.print();
list.erase(list.front());
list.erase(list.front());
list.print();
list.erase(list.front());
list.print();



