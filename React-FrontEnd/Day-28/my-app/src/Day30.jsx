import React,{useState, useRef}from 'react'

function Day30() {
    const [count,setCount]=useState(0);
    const countRef=useRef(0);
    const textRef=useRef(null);

    function handleClick(){
        setCount(count+1);
        countRef.current++;
        textRef.current.focus();
        textRef.current.value="Akila";
        console.log("Count Value: ",count);
        // console.log("countRef Value: ",countRef.current)
    }

  return (
    <div>
    <h1>USEREF DEMO:</h1>
    <p>Count: {count}</p>
    <p>CountRef: {countRef.current}</p>
    <button onClick={handleClick}>Increment</button>
    <input type="text" ref={textRef}></input>
    </div>
  )
}

export default Day30
