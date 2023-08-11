import React from 'react'
import { useState } from 'react'
import Like from './Like.jsx'

function Cart(props) {
    // let [count,setCount]=useState(0);
    // let [flag,setFlag]=useState("true");
    const [ counter , setCounter ] = useState(0);
    const [ flag , setFlag ] = useState("true");
      function handleIncrement(){
        setCounter(counter + 1);
        handleFlag();
      }
      function handleFlag(){
        setFlag("false");  
      }


      function handleDecrement(){        
        setCounter(counter - 1)
        handleFlag1();
      }
      function handleFlag1(){
        setFlag("true");
      }


    // function setValue1(count,flag){
    //     // setCount(count);
    //     setFlag(flag);

    //     // function setCount(count){
    //     //     count+1;
    //     // }
    //     setCount(count + 1)
    //     function setFlag(flag){
    //         flag="false";
    //     }

    // }
    
    // function setValue2(count,flag){
    //     // setCount(count);
    //     setFlag(flag);

    //     // function setCount(count){
    //     //     count-1;
    //     // }
    //     setCount(count - 1)
    //     function setFlag(flag){
    //         flag="true";
    //     }

    // }

  return (
    <>
   
    <button>Cart {counter}</button>
    <div>{props.name}</div>
    <div>{props.description}</div>
    {/* <div>
     <button onClick={handleIncrement}>Add to Cart</button>
     <button onClick={handleDecrement}>Remove from Cart</button>
    </div> */}
    
    {flag==="true"? 
    <button onClick={handleIncrement}>Add to Cart
    </button>:
    <button onClick={handleDecrement}>Remove from Cart 
    </button>
    }
    {/* <Like counter={counter}/> */}


    </>
  )
}

export default Cart