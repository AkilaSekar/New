import React from 'react'



function Count() {
    const [flag1, setFlag1] = useState(true);
    const [ counter , setCounter ] = useState(0);
    
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
    <div>Count
          <div className="product"><Product1/>{flag1? <button onClick={handleClickAdd1}><p><button>Add to Cart</button></p></button> : <button onClick={handleClickRemove1}>Remove from Cart</button>}</div>
    </div>
  )
}

export default Count