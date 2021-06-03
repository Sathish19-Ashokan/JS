function fakeAjax(url, cb) {
    var fakeResponses = {
        "file1": "The first text",
        "file2": "The middle text",
        "file3": "The last text",
    }

    var randomDelay = (Math.round(Math.random() * 1E4) % 8000 + 1000)
    console.log("Requesting: " + url);

    setTimeout(function () {
        cb(fakeResponses[url]);
    }, randomDelay);
}

function getFile(file) {
    fakeAjax(file, function (text) {
        fakeResponsesValue(file, text);
    })
}

function fakeResponsesValue(files, value) {
        container[files] = value;
    let arr = ['file1', 'file2', 'file3'];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in container) {
            if (typeof container[arr[i]] === 'string') {
                print(container[arr[i]]);
                container[arr[i]] = true;
            }
        }
        else{
            return;
        }
    }
    console.log("completed");
}

function print(output){
    console.log(output);
}

let container = {};


// request all in parallel
getFile('file1');
getFile('file2');
getFile('file3');