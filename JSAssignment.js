function oneTriangle(lines){
    let x=1;
    let sum = "";
    for(let i=1; i<=lines; i++)
    {
        for(let j=1; j<=lines-i; j++){
            sum = sum + " ";
        }
        for(let k=1; k<=x; k++){
            sum = sum + "1";
        }
        for(let l=1; l<=lines-i; l++){
            sum = sum + " ";
        }
        console.log(sum);
        sum="";
        x=x+2;
    }
}

oneTriangle(5);