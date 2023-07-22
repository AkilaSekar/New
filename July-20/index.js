function calci(operation){
    // let num1=Number(document.getElementById("num1").value);
    // let num2=Number(document.getElementById("num2").value);

    const num1=Number(prompt("Enter Number 1"));
    const num2=Number(prompt("Enter Number 2"));    
    let result;
    switch(operation){
        case 'add':
            result=num1+num2;
            break;
        case 'sub':
            result=num1-num2;
            break;
        case 'mul':
            result=num1*num2;
            break;
        case 'div':
            result=num1/num2;
            break;
        default:
            result="Invalid";
    }

    const msg=confirm("Do you want the result to be shown??");
    if(msg){
        document.getElementById('result').innerText=result;
    }
    else{
        document.getElementById('result').innerText="Result cannot be displayed";
    }
    
setTimeout(()=>{
    alert("time out ");
},7000);
   
}