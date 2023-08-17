import React,{useState} from 'react'
import ChildComponent from './ChildComponent.jsx';

function ParentComponent() {
    const [receivedData,setReceivedData]= useState('');
    function getDatafromChild(data){
        setReceivedData(data);
    }
  return (
    <div>Parent Component received the data as : {receivedData}
    <ChildComponent parentFunction={getDatafromChild}/>
    </div>
  )
}

export default ParentComponent