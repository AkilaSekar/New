const express=require("express");

const app=express();

const PORT=3000;

app.get("/",(req,res)=>{
    res.send("Hello World!!!");
    });

app.get("/home",(req,res)=>{
    res.send("Hello World from Home!!!");
    });

    app.listen(PORT, ()=>{
        console.log("Server In running on port: ",PORT);
    })




// function operation(a,b,op){
//     switch(op){
//         case "add":
//             return a+b;
//         case "sub":
//             return a-b;
//         case "mul":
//             return a*b;
//         case "div":
//             return a/b;
//         default:
//             return 0;
        
//     }

// }
// console.log("The added value is :",operation(10,20,"add"));
// console.log("The subtracted value is :",operation(10,20,"sub"));
// console.log("The multiplied value is :",operation(10,20,"mul"));
// console.log("The divided value is :",operation(10,20,"div"));