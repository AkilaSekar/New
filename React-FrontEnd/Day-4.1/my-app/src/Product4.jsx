import React from 'react'
import product4 from './product4.jpg'
function Product4() {
  return (
    <div className='pro1'>   
       <div className="card">  
            <p><button>Black Floral</button></p>
            <img src={product4} />
            <p className="price">$30.55</p> 
            <p>Best Suitable for Office wear</p>
            <p>More Attractive colors available</p>  
        </div>
    </div>
  )
}
export default Product4