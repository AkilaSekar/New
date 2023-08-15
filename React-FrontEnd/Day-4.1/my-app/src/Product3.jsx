import React from 'react'
import product3 from './product3.jpg'
function Product3() {
  return (
    <div className='pro1'> 
        <div className="card">  
            <p><button>Plain Party</button></p>
            <img src={product3} />
            <p className="price">$25.99</p> 
            <p>Unique Party wear</p>
            <p>Best Quality with minimal price range</p>              
        </div>
    </div>
  )
}
export default Product3