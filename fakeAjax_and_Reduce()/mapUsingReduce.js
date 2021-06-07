//implementation of map
// [1,2,3,4,5].map( I => i*2)       [2,4,6,8,10]

//Implement the logic of map method using reduce


const mapUsingReduce = [1, 2, 3, 4, 5].reduce(function (mappedArray, currentValue, index) {
    //console.log("currentValue",currentValue);
    //console.log("mappedArray",mappedArray);
    mappedArray[index] = currentValue * 2;
    //console.log("mappedArray",mappedArray);
    return mappedArray;
}, [])