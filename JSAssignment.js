let arr = [10,3,5,12,5,3,9,1];
let count = 0;
let duplicate = 0;
let copy=[];
for(let i=0; i<arr.length; i++)
{
    let item = arr[i];
    for(let dup=0; dup<copy.length; dup++)
    {
        if(item === copy[dup])
        duplicate++;
    }
    if(duplicate === 0){
        for(let j=0; j<arr.length; j++){
            if(item === arr[j])
            {
                count++;
            }
        }
        console.log(`${item} occured ${count} times`);
    }
    copy.push(item);
    count=0;
    duplicate=0;
}
