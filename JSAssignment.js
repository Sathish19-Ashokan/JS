function numTriangle(line){
    if(line<0)
    console.log("Enter Positive Number");

    else{
        let sum = "";
        for(let row=1; row<=line; row++)
        {
            for(let i=1;i<=line-row; i++)
            {
                sum = sum + " ";
            }
            let n1 = (row*2)-1;
            for(let j=row; j<=n1; j++)
            {
                if(j>=10)
                {
                    let j1 = j -10;
                    sum = sum + j1;
                }
                else
                sum = sum + j;
            }
            let n2 = (row*2)-2;
            for(let k=n2; k>=row; k--)
            {
                if(k>=10)
                {
                    let k1 = k -10;
                    sum = sum + k1;
                }
                else
                sum = sum + k;
            }
            console.log(sum);
            sum = "";
        }
    }
    
}

numTriangle(7);