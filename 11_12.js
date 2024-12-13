let randomnumber = Math.floor(Math.random()*1000+1)
let  arr = [1,2,3,4,5,6,7,8,9,10];
console.log(randomnumber);
let result = arr.map((n)=>{
    return n**n;
}).filter((n)=>{
    return n< randomnumber;
}).reduce((a,b)=>{
    return a*b
});

console.log(result);
