import React, { useInsertionEffect } from 'react'
import { useParams } from 'react-router-dom'

function Diet() {
    const {name}=useParams();

    const dietInfo={
        highFat: "It makes you fat",
        highProtein: "It makes you fit",
        zeroFat: "It makes you lean"
    }
    
    const info=dietInfo[name];
  return (
    <div>
        <h1>{dietInfo}</h1>
        <h1>{}</h1>
    </div>
  )
}

export default Diet