import React from 'react'
import product7 from './product7.jpg'
function Product7() {
  return (
    <div className='pro1'>    
       <div className="card">  
            <p><button>Tailored</button></p>
            <img src={product7} />
            <p className="price">$22.12</p> 
            <p>Rich pattern with classy colors</p>
            <p>More comfortable for daily use</p>  
        </div>
    </div>
  )
}
export default Product7