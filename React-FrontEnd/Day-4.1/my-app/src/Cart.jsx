import React from 'react'
import { useState } from 'react'
import Product1 from './Product1.jsx'
import Product2 from './Product2.jsx'
import Product3 from './Product3.jsx'
import Product4 from './Product4.jsx'
import Product5 from './Product5.jsx'
import Product6 from './Product6.jsx'
import Product7 from './Product7.jsx'
import Product8 from './Product8.jsx'
import head from './head.jpg'
import cart from './cart.jpg'


function Cart() {
  // Declaration of initail flag values and cart count for every product using hooks
    const [flag6, setFlag6] = useState(true);
    const [flag1, setFlag1] = useState(true); 
    const [flag2, setFlag2] = useState(true); 
    const [flag3, setFlag3] = useState(true); 
    const [flag4, setFlag4] = useState(true); 
    const [flag5, setFlag5] = useState(true); 
    const [flag7, setFlag7] = useState(true); 
    const [flag8, setFlag8] = useState(true);    
    const [ counter , setCounter ] = useState(0);

    // Handling functions for product 1 when added and remoed from cart
    const handleClickAdd3 = () => {
        setFlag3(false);
         handleIncrement3();
    }
    function handleIncrement3(){        
        setCounter(counter + 1);
     }
    const handleClickRemove3 = () => {
        setFlag3(true);
        handleDecrement3();
    }
    function handleDecrement3(){        
        setCounter(counter - 1);
      }

    // Handling functions for product 2 when added and remoed from cart
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

      
    // Handling functions for product 3 when added and remoed from cart
    const handleClickAdd2 = () => {
          setFlag2(false);
          handleIncrement1();
      }
    function handleIncrement2(){        
        setCounter(counter + 1);
    }
    const handleClickRemove2 = () => {
        setFlag2(true);
        handleDecrement1();
    }
    function handleDecrement2(){        
        setCounter(counter - 1);
      }

    
    // Handling functions for product 4 when added and remoed from cart
    const handleClickAdd4 = () => {
        setFlag4(false);
        handleIncrement4();
    }
    function handleIncrement4(){        
        setCounter(counter + 1);
    }
    const handleClickRemove4 = () => {
        setFlag4(true);
        handleDecrement4();
    }
    function handleDecrement4(){        
        setCounter(counter - 1);
      }

    // Handling functions for product 5 when added and remoed from cart

      const handleClickAdd5 = () => {
        setFlag5(false);
        handleIncrement5();
    }
    function handleIncrement5(){        
        setCounter(counter + 1);
    }
    const handleClickRemove5 = () => {
        setFlag5(true);
        handleDecrement5();
    }
    function handleDecrement5(){        
        setCounter(counter - 1);
      }

    
    // Handling functions for product 6 when added and remoed from cart
    const handleClickAdd6 = () => {
          setFlag6(false);
          handleIncrement6();
    }
    function handleIncrement6(){        
        setCounter(counter + 1);
    }
    const handleClickRemove6 = () => {
        setFlag6(true);
        handleDecrement6();
    }
    function handleDecrement6(){        
        setCounter(counter - 1);
      }

    
  // Handling functions for product 7 when added and remoed from cart
    const handleClickAdd7 = () => {
      setFlag7(false);
       handleIncrement7();
    }
    function handleIncrement7(){        
        setCounter(counter + 1);
    }
    const handleClickRemove7 = () => {
        setFlag7(true);
        handleDecrement7();
    }
    function handleDecrement7(){        
        setCounter(counter - 1);
      }


    
    // Handling functions for product 8 when added and remoed from cart
    const handleClickAdd8 = () => {
      setFlag8(false);
       handleIncrement8();
    }
    function handleIncrement8(){        
        setCounter(counter + 1);
    }
    const handleClickRemove8 = () => {
        setFlag8(true);
        handleDecrement8();
    }
    function handleDecrement8(){        
        setCounter(counter - 1);
      }
  return (
    <>
    <div>
      <div class="header">
      <img src={head} className="center"/>
      <h1>Welcome to the World of Fashion</h1>
      <p>With us you feel the supercool comfort around!!!!</p>
      <button className="cart">Cart {counter} </button></div>
      <div className="container">
          <div className="product card"><Product1/>{flag1? <button onClick={handleClickAdd1}>Add to Cart</button> : <button onClick={handleClickRemove1}>Remove from Cart</button>}</div>
          <div className="product card"><Product2/>{flag2? <button onClick={handleClickAdd2}>Add to Cart</button> : <button onClick={handleClickRemove2}>Remove from Cart</button>}</div>
          <div className="product card"><Product3/>{flag3? <button onClick={handleClickAdd3}>Add to Cart</button> : <button onClick={handleClickRemove3}>Remove from Cart</button>}</div>
          <div className="product card"><Product4/>{flag4? <button onClick={handleClickAdd4}>Add to Cart</button> : <button onClick={handleClickRemove4}>Remove from Cart</button>}</div>
          <div className="product card"><Product5/>{flag5? <button onClick={handleClickAdd5}>Add to Cart</button> : <button onClick={handleClickRemove5}>Remove from Cart</button>}</div>
          <div className="product card"><Product6/>{flag6? <button onClick={handleClickAdd6}>Add to Cart</button> : <button onClick={handleClickRemove6}>Remove from Cart</button>}</div>
          <div className="product card"><Product7/>{flag7? <button onClick={handleClickAdd7}>Add to Cart</button> : <button onClick={handleClickRemove7}>Remove from Cart</button>}</div>
          <div className="product card"><Product8/>{flag8? <button onClick={handleClickAdd8}>Add to Cart</button> : <button onClick={handleClickRemove8}>Remove from Cart</button>}</div>
        </div>
    </div>
   
    </>
  )
}

export default Cart