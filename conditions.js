const flag = true

if(!flag){
    console.log("Condition satisfied")
}
else{
    console.log("Condition NOT satisfied")
}

let i = 0
while(i<10)
{
    i++
    console.log(i)
}
console.log("****************************")
let n=0
for(let k=1;k<10;k++)
{
    if(k%2 == 0 || k%5 ==0 )
    {
        n++
        console.log(k)
        if(n == 3){
            break
        }
    }   
}

/*do{
    i++
} while(i>10);
console.log(i)*/