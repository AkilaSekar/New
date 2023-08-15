import React from 'react'
import product5 from './product5.jpg'
function Product5() {
  return (
    <div className='pro1'>    
       <div className="card">  
            <p><button>Fancy Floating</button></p>
            <img src={product5} />
            <p className="price">$19.05</p> 
            <p>Rich pattern with classy colors</p>
            <p>More comfortable for daily use</p>
        </div>
    </div>
  )
}

export default Product5