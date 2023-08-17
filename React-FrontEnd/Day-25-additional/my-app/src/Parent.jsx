import React from 'react'
import Child from './Child.jsx'

function Parent() {
    // const names=['Akila','Megha','Deeps'];
    const values=[1,2,3,4,5]
  return (
    <div>
        {/* Parent Component shows the "Raw values" */}
        {/* <ul>
            {values.map((value)=>(
                <li>{value}</li>
            ))}
        </ul>
        <Child values={values}/> */}
    </div>

  )
}

export default Parent