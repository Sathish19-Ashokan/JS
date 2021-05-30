function Stack(MaxSize){
    let func = Object.create(stack);
    func.MaxSize = MaxSize;
    func.top = -1;
    func.arr = [];

    return func;
}

function Queue(MaxSize1){
    let func = Object.create(queue);
    func.MaxSize1 = MaxSize1;
    func.front = -1;
    func.top = -1;
    func.arr = [];

    return func;
}

const stack = {
    push(element){
        this.top++;
        if(this.top >=0 && this.top < this.MaxSize){
            this.arr[this.top] = element;
            return (`${element} is pushed. In index = ${this.top}`);
         }
        else{
            this.top--;
            return (`Stack OverFlow. Current Index = ${this.top}`);
        }
    },

    pop(){
        if(this.top >=0 && this.top < this.MaxSize){
            //console.log(this.top);
            let del = this.arr[this.top];
            this.top--;
            return (`Poped element is ${del}. From index = ${this.top + 1}`);
        }
        else{
            return (`Stack UnderFlow. Current index = ${this.top}`);
        }
    }
}

 const queue = {
    add(element){
        
        this.top++;
        if(this.top === 0){
            this.front = 0;
        }
        if(this.top >= 0 && this.top < this.MaxSize1)
        {
            this.arr[this.top] = element;
            return (`${element} is added. In index = ${this.top}`);
        }
        else{
            this.top--;
            return (`Queue overflow. Current Index = ${this.top}`);
        }
    },

    // remove(){
    //     if(this.top >= 0 && this.top < this.MaxSize1)
    //     {
    //         let pop1 = this.arr[this.front];
    //         this.front++;
    //         this.top--;
    //         //this.arr = this.arr - this.arr[0];
    //         return (`Removed element = ${pop1}. From index = ${this.front - 1}`);
    //     }
    //     else{
    //         return (`Queue UnderFlow. Current Index = ${this.top}`);
    //     }
    // }

    remove(){
        if(this.top === 0){
            this.top--;
            return (`Removed element = ${this.arr[0]}  From index = 0`);
        }
        if(this.top > 0 && this.top < this.MaxSize1){
            for(let i=0 ; i<this.top ; i++){
                this.arr[i] = this.arr[i+1];
            }
            this.top--;
            return ("deleted");
        }
        else{
            return (`Queue UnderFlow. Current Index = ${this.top}`);
        }
    }
}