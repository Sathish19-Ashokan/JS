run(function* () {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const response = yield fetch(url);
    //console.log("----->", response);
    const post = yield response.json();
    const title = post.title;
    console.log('Title', title);
})

function run(generator) {
    // fill the code here
    const obj = generator();
    //function sathish() {
        const val = obj.next().value;
        //console.log("one",val);
        val.then(res => {
            return obj.next(res).value;
            //console.log(getVal);
            //obj.next(getVal);
        }).then(value => {
            //console.log(value);
            obj.next(value);
        })
    //}
    //return sathish();
}

// function* generator() {
//     const url = 'https://jsonplaceholder.typicode.com/posts/1';
//     console.log("one")
//     const response = yield fetch(url);
//     console.log("two",response);
//     const post = yield response.json();
//     console.log("three");
//     const title = post.title;
//     console.log('Title', title);
// }

//================================================================
// const obj = generator();

// const val = obj.next().value;
// console.log("one",val);
// val.then(res => {
//     //console.log("JSON",obj.next(res));
//     return obj.next(res).value;
//     //console.log(getVal);
//     //obj.next(getVal);
// }).then(value => {
//     //console.log(value);
//     obj.next(value);
// })
//=================================================================

//console.log("getVal",getVal);
//console.log("one",obj.next(3).value);

// function func(arg) {
//     let link = arg;
//     //let getValue;
//     fetch(link)
//         .then(res => {
//             //console.log("fsfsfsf",res);
//             //getValue = res;
//             return res.json();
//             //console.log("--->",getValue);
//             //return res;
//         })
//     //console.log("fsfsfsf",newValue);
//     //return getValue;
// }


//let users = func('https://jsonplaceholder.typicode.com/posts/1');

// function func2(value){
//     let newValue = value;
//     return newValue;
// }

//func('https://jsonplaceholder.typicode.com/posts/1');

// function add(x,y){
//     return x+y;
// }

// fetch(arg)
//     .then(res => {
//         return res;
//         //console.log("for response = ",res);
//         //return res.json();
//     })



// function* generator() {
//     const url = 'https://jsonplaceholder.typicode.com/posts/1';
//     const response = yield fetch(url);
//     console.log("kjdbkdjbaiudb", response);
//     const post = yield response.json();
//     const title = post.title;
//     console.log('Title', title);
// }

// const gen = generator();

// // console.log(gen.next());
// // console.log(gen.next(url));

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(res => {
//         console.log("for response = ",res);
//         return res.json();
//     })
//      .then(data => {
//          console.log(data.title);
//      })
    // .catch(e => {
    //     console.log(e)
    // })

// function* generator(i){
//     console.log(i);
//     const j = 5 * (yield 'sathish');
//     console.log(j);
//     const k = yield (2 * j / 4);
//     console.log(k);
//     return (i + j + k);
// }

// var gen = generator(10);
// console.log(gen.next(20));
// console.log(gen.next(10));
// console.log(gen.next(5));


// function *fetchUser(){
//     const user = yield getData();
//     console.log(user);
// }

// function getData(){
//     return {name: 'rajesh', dob: '1991'}
// }

// var gen = fetchUser();


// function* fetchUser(action){
//     const user = yield apiCall();
//     console.log(user);
// }

// function apiCall(){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("sathish");
//         },2000);
//     })
// }

// var fetchGen = fetchUser();

// console.log(fetchGen.next().value.then(n => console.log(n)));