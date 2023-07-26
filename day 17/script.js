let promiseObj=new Promise((resolve,reject)=>{
    console.log("Hello World!!");
    // resolve("Resolved");
     reject("rejected");
});
console.log(promiseObj);

promiseObj
.then(
(val)=>{
console.log("the value is",val);

})
.catch(
(err)=>{
    console.log("the value is",err);
}  
)