let a=[1,2,3,4,5];
let sum=0;
function add(){
    for(let i=0;i<a.length;i++){
        sum+=sum;
    }
    return sum;
}
console.log(add());