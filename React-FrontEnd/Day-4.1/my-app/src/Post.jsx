import React from 'react'

import Comment from './Comment.jsx'

function Post(props) {
    let flag=props.flag;
    let arr=["Item 1","Item 2","Item 3"];   
  return (
    <div>
       {/* <h3 style={{color: "red"}}>{props.name}{" is "}{props.color}{" in color " }</h3>  */}
       {/* <ol>
        {
            arr.map((item)=>(
                <li>{item}</li>
            ))
        }
        {flag==="true"?<button>True</button>:<button>False</button>}
       </ol> */}
      
       <Comment/>

    </div>
  )
}

export default Post