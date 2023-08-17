import React from 'react'
import Grandchild from './Grandchild.jsx'

function Child(props) {
  return (
    <div>Child Component shows the "Mapped values"
        {/* <ol>
            {props.values.map((value)=>(
                <li>{value+2}</li>
            ))}
        </ol> */}
        <Grandchild values={props.values}/>
    </div>

  )
}

export default Child