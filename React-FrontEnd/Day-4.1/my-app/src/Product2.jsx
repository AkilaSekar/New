import React from 'react'
import product2 from './product2.jpg'
function Product2() {
  return (
    <div className='pro1'> 
      <div className="card">
        <p><button>Purple Casual</button></p>
        <img src={product2} />
        <p className="price">$24.89</p> 
        <p>Best Suitable for Office wear</p>
        <p>More Attractive colors available</p>    
      </div>
    </div>
  )
}
export default Product2