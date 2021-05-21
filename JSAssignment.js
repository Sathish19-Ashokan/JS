function pascal(line){
    let op=[];
    let sum = "";
    for(let row=0; row<line; row++)
    {
        let current=[];
        let str = "";
        for(let col=0; col<=row; col++)
        {
            if(col===0 || col===row)
            current.push(1);
            else{
                current.push((op[row-1][col-1]+op[row-1][col]));
            }
        }
        op.push(current);
            for(let i=1;i<=line-row; i++)
            {
                sum = sum + " ";
            }
            for(let j=0; j<current.length; j++){
                str = " " + current[j].toString() + str;
            
            }
        console.log(`${sum}${str}`);
        sum="";
    }
}
pascal(5);