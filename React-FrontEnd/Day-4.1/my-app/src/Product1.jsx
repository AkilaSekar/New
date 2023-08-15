import React from 'react'
import product1 from './product1.jpg'
function Product1() {
  return (
    <div className='pro1'> 
       <div className="card">
        <p><button>White Floral</button></p>
        <img src={product1} />
        <p className="price">$19.99</p> 
        <p>Super comfortable Cotton top</p>
        <p>Most suitable for Casual use</p>
      </div>
    </div>
  )
}
export default Product1