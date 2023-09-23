const express=require("express");
const fs=require("fs");
const path=require("path");

const outputFolder='./output';

console.log("Check!!!",fs.existsSync(outputFolder));

if(!fs.existsSync(outputFolder)){
    fs.mkdirSync(outputFolder);
}

const app=express();

const PORT=3000;


app.get("/createFile",(req,res)=>{
    const currentTime= new Date();
    console.log(currentTime);
    const year=currentTime.getFullYear().toString();
    const month=(currentTime.getMonth()+1).toString();
    const date=currentTime.getDate().toString();
    const hours=currentTime.getHours().toString();
    const mins=currentTime.getMinutes().toString();
    const secs=currentTime.getSeconds().toString();

    const dateTimeForFileName= `${year}-${month}-${date}-${hours}-${mins}-${secs}`;
    const filePath= path.join(outputFolder,dateTimeForFileName);

    console.log("Filepath",filePath);

    fs.writeFile(filePath,currentTime.toISOString(),(err)=>{
        if(err){
            res.status(500).send(`Error:${err}`);
            return;
        }

        res.send(`File created at:${filePath}`);
    });
})

    app.listen(PORT, ()=>{
        console.log("Server In running on port: ",PORT);
    });




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