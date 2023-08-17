import React from 'react'

function ChildComponent(props) {
    function childFunction(){
        const data=" Hello World data recevied";
        props.parentFunction(data);
    }
  return (
    <div>ChildComponent: 
        <button onClick={childFunction}>Click here to send data to the parent</button>
    </div>
  )
}

export default ChildComponent