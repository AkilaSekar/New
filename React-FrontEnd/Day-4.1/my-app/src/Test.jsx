import React from 'react'
import { useState } from 'react'

function Test() {
    const [flag, setFlag] = useState(true);
    const [flag1, setFlag1] = useState(true);    
    const [ counter , setCounter ] = useState(0);
    const handleClickAdd = () => {
        setFlag(false);
         handleIncrement();
    }
    function handleIncrement(){        
        setCounter(counter + 1);
     }
    const handleClickRemove = () => {
        setFlag(true);
        handleDecrement();
    }
    function handleDecrement(){        
        setCounter(counter - 1);
      }



    //   ---------------------------


    const handleClickAdd1 = () => {
        setFlag1(false);
         handleIncrement1();
    }
    function handleIncrement1(){        
        setCounter(counter + 1);
     }
    const handleClickRemove1 = () => {
        setFlag1(true);
        handleDecrement1();
    }
    function handleDecrement1(){        
        setCounter(counter - 1);
      }

  return (
    <>
    <button>Count{counter}</button>
    <div className="container">
        <div className="product">{flag? <button onClick={handleClickAdd}>Add to Cart</button> : <button onClick={handleClickRemove}>Remove from Cart</button>}</div>
        <div className="product">{flag1? <button onClick={handleClickAdd1}>Add to Cart</button> : <button onClick={handleClickRemove1}>Remove from Cart</button>}</div>
    </div>
    
   
    </>
  )
}

export default Test