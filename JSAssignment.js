function pascal(line){
    let op=[];
    for(let row=0; row<line; row++)
    {
        let current=[];
        for(let col=0; col<=row; col++)
        {
            if(col===0 || col===row)
            current.push(1);
            else{
                current.push((op[row-1][col-1]+op[row-1][col]));
            }
        }
        op.push(current);
    }
    return op;
}

console.log(pascal(5));