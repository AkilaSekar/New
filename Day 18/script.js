// let promiseObj=new Promise((resolve,reject)=>{
//     console.log("Promise Object invoked");
//     // resolve("Success");
//     reject("Failure");
// });
// console.log(promiseObj);
// promiseObj
// .then((val)=>{
//     console.log("success",val);
// })
// .catch((err)=>{
//     console.log("fail",err);
// })


function function1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Task 1 is completed!!!");
        },1000);
    })
}

function function2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Task 2 is not completed!!!");
        },1000);
    })
}

function function3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Task 3 is completed!!!");
        },1000);
    })
}

function1()
.then((val)=>{
    console.log(val);
    return function2();
})
.then((val)=>{
    console.log(val);
    return function3();
})
.then((val)=>{
    console.log(val);
    console.log(" All the tasks are completed!!!");

})
.catch((err)=>{
    console.log("Error:",err);
   

})

