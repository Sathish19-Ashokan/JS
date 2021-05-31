function Stack(MaxSize){
    let func = {};
    func.MaxSize = MaxSize;
    func.top = -1;
    func.arr = [];

    func.push = function (element){
        this.top++;
        if(this.top >=0 && this.top < this.MaxSize){
            this.arr[this.top] = element;
         }
        else{
            this.top--;
            return "Stack Overflow";
        }
    }

    func.pop = function (){
        if(this.top >=0 && this.top < this.MaxSize){
            let del = this.arr[this.top];
            let temp = [];
            temp = this.arr;
            this.arr = [];
            for(let i=0; i<this.top ; i++){
                this.arr[i] = temp[i];
            }
            this.top--;
            return del;
        }
        else{
            return "Stack UnderFlow";
        }
    }

    return func;
}

function Queue(MaxSize1){
    let func = {};
    func.MaxSize1 = MaxSize1;
    func.front = -1;
    func.top = -1;
    func.arr = [];

    func.add = function (element){
        
        this.top++;
        if(this.top === 0){
            this.front = 0;
        }
        if(this.top >= 0 && this.top < this.MaxSize1)
        {
            this.arr[this.top] = element;
        }
        else{
            this.top--;
            return "Queue overflow";
        }
    }

    func.remove = function (){
        if(this.top === 0){
            this.top--;
            return this.arr[0];
        }
        if(this.top > 0 && this.top < this.MaxSize1){
            let del = this.arr[0];
            let temp = [];
            temp = this.arr;
            this.arr = [];
            for(let i=0; i<this.top ; i++){
                this.arr[i] = temp[i+1];
            }
            this.top--;
            return del;
        }
        else{
            return "Queue UnderFlow";
        }
    }

    return func;
}
