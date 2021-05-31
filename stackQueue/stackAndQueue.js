function Stack(Maxsize) {
    let MaxSize = Maxsize;
    let top = -1;
    let arr = [];

    function push(element) {
        top++;
        if (top >= 0 && top < MaxSize) {
            arr[top] = element;
        }
        else {
            top--;
            return "Stack Overflow";
        }
    }

    function pop() {
        if (top >= 0 && top < MaxSize) {
            let del = arr[top];
            let temp = [];
            temp = arr;
            arr = [];
            for (let i = 0; i < top; i++) {
                arr[i] = temp[i];
            }
            top--;
            return del;
        }
        else {
            return "Stack UnderFlow";
        }
    }

    return Object.freeze({ push, pop });
}

function Queue(Maxsize1) {
    let MaxSize1 = Maxsize1;
    let front = -1;
    let top = -1;
    let arr = [];

    function add(element) {

        top++;
        if (top === 0) {
            front = 0;
        }
        if (top >= 0 && top < MaxSize1) {
            arr[top] = element;
        }
        else {
            top--;
            return "Queue overflow";
        }
    }

    function remove() {
        if (top === 0) {
            top--;
            return arr[0];
        }
        if (top > 0 && top < MaxSize1) {
            let del = arr[0];
            let temp = [];
            temp = arr;
            arr = [];
            for (let i = 0; i < top; i++) {
                arr[i] = temp[i + 1];
            }
            top--;
            return del;
        }
        else {
            return "Queue UnderFlow";
        }
    }

    return Object.freeze({add,remove});
}