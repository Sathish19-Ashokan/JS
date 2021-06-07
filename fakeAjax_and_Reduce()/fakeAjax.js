//Let assume that your function accepts an array of promises.  
//Your function should accept an array of promises and out put the result of the promises in order mentioned in the array

function fakeAjax(message) {
    return new Promise((resolve, reject) => {
        var randomDelay = (Math.round(Math.random() * 1E4) % 8000 + 1000);
        console.log(randomDelay);
        setTimeout(() => resolve(message), randomDelay);
    });
}

const promises = [fakeAjax("1st"), fakeAjax("2nd"), fakeAjax("3rd")];
//const promises = ['1st' , '2nd' , '3rd'];

function processPromises(promises) {
    //  Fill the code here. 
    //for (let FakeAjax of promises) {
        //console.log("output", i);
        // fakeAjax(FakeAjax)
        //     .then(text => {
        //         console.log(text);
        //     })
    //}
    // for(i=0;i<promises.length;i++){
    //     promises[i].then(value => {
    //         console.log(value);
    //     })
    // }

    promises[0].then(value =>{
        console.log(value);
        return promises[1];
    })

    .then(value =>{
        console.log(value);
        return promises[2]
    })

    .then(value =>{
        console.log(value);
    })
}