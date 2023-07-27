

function queen(a,b){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            
            resolve("Helo!! I am the queen here!!!");
            // reject("Errrrrr");
        },2000);
        
    });
   
}
async function functionCall(){
    try{
        const value = await queen();
        console.log(value);

    }catch(err){
        console.log("Sorry The Queen is busy now ");
    }
    console.log("Thank you for waiting for 2 seconds to see the Queen");
}
functionCall();