import React from 'react'
import { useState } from 'react'
import Like from './Like.jsx'

function Cart(props) {
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

  return (
    <>
   
    <button>Cart {counter}</button>
    <div>{props.name}</div>
    <div>{props.description}</div>
    
    {flag==="true"? 
    <button onClick={handleIncrement}>Add to Cart
    </button>:
    <button onClick={handleDecrement}>Remove from Cart 
    </button>
    }
    <Like counter={counter}/>


    </>
  )
}

export default Cart