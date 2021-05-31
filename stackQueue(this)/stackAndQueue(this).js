function Stack(MaxSize) {
    this.MaxSize = MaxSize;
    this.top = -1;
    this.arr = [];

    this.push = function (element) {
        this.top++;
        if (this.top >= 0 && this.top < this.MaxSize) {
            this.arr[this.top] = element;
        }
        else {
            this.top--;
            return "Stack Overflow";
        }
    }

    this.pop = function () {
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
}

let stack1 = new Stack(20);
stack1.push("item 0");
stack1.push("item 1");
stack1.pop();


function Queue(MaxSize1) {
    this.MaxSize1 = MaxSize1;
    this.front = -1;
    this.top = -1;
    this.arr = [];

    this.add = function (element) {

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

    this.remove = function () {
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
}