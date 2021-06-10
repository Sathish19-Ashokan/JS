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
  return new Promise(function (resolve, reject) {
    fakeAjax(file, resolve);
  })
}
const files = [];
let fileIndex = 0;

getFile('file1')
  .then(text => {
    files[0] = text;
    tryToPrint();
  })
  .catch(() => {
    console.log("error occured");
  })

getFile('file2')
  .then(text => {
    files[1] = text;
    tryToPrint();
  })
  .catch(() => {
    console.log("error occured");
  })

getFile('file3')
  .then(text => {
    files[2] = text;
    tryToPrint();
  })
  .catch(() => {
    console.log("error occured");
  })
function tryToPrint() {
  while (files[fileIndex]) {
    output(files[fileIndex]);
    fileIndex++;
  }
}

function output(element) {
  console.log(element);
  if (fileIndex === 2)
    console.log("completed");
}