function Stack(MaxSize) {
    let func = Object.create(Stack.prototype);
    func.MaxSize = MaxSize;
    func.top = -1;
    func.arr = [];

    return func;
}

Stack.prototype.push = function (element) {
    this.top++;
    if (this.top >= 0 && this.top < this.MaxSize) {
        this.arr[this.top] = element;
    }
    else {
        this.top--;
        return "Stack Overflow";
    }
}

Stack.prototype.pop = function () {
    if (this.top >= 0 && this.top < this.MaxSize) {
        let del = this.arr[this.top];
        let temp = [];
        temp = this.arr;
        this.arr = [];
        for (let i = 0; i < this.top; i++) {
            this.arr[i] = temp[i];
        }
        this.top--;
        return del;
    }
    else {
        return "Stack UnderFlow";
    }
}

function Queue(MaxSize1) {
    let func = Object.create(Queue.prototype);
    func.MaxSize1 = MaxSize1;
    func.front = -1;
    func.top = -1;
    func.arr = [];

    return func;
}

Queue.prototype.add = function (element) {

    this.top++;
    if (this.top === 0) {
        this.front = 0;
    }
    if (this.top >= 0 && this.top < this.MaxSize1) {
        this.arr[this.top] = element;
    }
    else {
        this.top--;
        return "Queue overflow";
    }
}

Queue.prototype.remove = function () {
    if (this.top === 0) {
        this.top--;
        return this.arr[0];
    }
    if (this.top > 0 && this.top < this.MaxSize1) {
        let del = this.arr[0];
        let temp = [];
        temp = this.arr;
        this.arr = [];
        for (let i = 0; i < this.top; i++) {
            this.arr[i] = temp[i + 1];
        }
        this.top--;
        return del;
    }
    else {
        return "Queue UnderFlow";
    }
}