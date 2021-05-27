//Write a function that takes an argument and returns that argument.
//identity(3)  // returns 3

const identity = function (num){
    return num;
}
identity(3);

// Write two binary functions, add and mul, that take two numbers and return their sum and product
// add(3, 4)  // return 7
// mul(3, 4)  // return 12

function add(num1, num2){
    return num1+num2;
}


const mul = function (num1, num2){
    return num1*num2;
}

// Write a function that takes an argument and returns a function that returns that argument.
// idf = identityf(3);
// idf() // return 3

function identityf(arg){
        return function sathish(){
            return arg;
        }
}

//const idf = identityf(3);

// write a function that adds from two invocations
// addf(3)(4)  // 7

function addf(num1){
    return function (num2){
        return num1 + num2;
    }
}

// write a function that takes a binary function and makes it callable with two invocations
// addf =  applyf(add);
// addf(3)(4) // 7
 
// applyf(mul)(5)(6) // 30


function applyf(typeOfFunction){
    return function (arg1){
        return function (arg2){
            return typeOfFunction(arg1,arg2);
        }
    }
}

// write a function that takes a function and an argument, and returns a function that cans supply a second argument

// add3 = curry(add, 3)
// add3(4) // return 7
 
// curry(mul, 3)(4) // 12

function curry(func,number){
    return function (b){
        return func(number,b);
    }
}

// without writing a new functions ( use the functions implemented in above questions) ), show three ways to create the inc function
// inc(5) //6
// inc(inc(5)) //7

inc = curry(add,1);
inc = applyf(add)(1);
inc = addf(1);

// Write  methodize, a function that converts a binary function to a method.
// Number.prototype.add = methodize(add);
 
// (3).add(4)  // 7

function methodize(binFun){
    return function (n1){
            return somee(this,n1);
        }
}

// write a function twice that takes a binary function and returns  a unary function  that passes its argument to the  binary function twice.
 
// var double = twice(add);
// double(11) // retuns 22
 
// var square =  twice(mul);
// square(11) // returns 121

function twice(addOrmul){
    return function (value){
        return addOrmul(value,value);
    }
}

// write a function composeu that takes two unary functions  and returns a unary function that can ball them both
 
// compose(double, square) (3) // 36

var double = twice(add);
var square = twice(mul);

function compose(unar1,unar2){
    return function (val){
        return unar2(unar1(val));
    }
}







