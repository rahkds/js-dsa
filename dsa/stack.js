class Stack {
    constructor() {
        this.items = [];
    }

    push(val) {
        this.items.push(val);
    }

    empty() {
        return this.items.length === 0;
    }

    top() {
        if(this.empty()) return;
        return this.items.at(-1);
    }

    pop() {
        if(!this.empty()) {
            this.items.pop();
        }
    }
};




