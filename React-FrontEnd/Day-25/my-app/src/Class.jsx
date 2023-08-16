import React,{useState,useEffect} from 'react'

function Class() {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]= useState(null);


    useEffect(()=>{
        async function fetchData() {
            const apiUrl = "https://restcountries.com/v3.1/all";
            try {
              const response = await fetch(apiUrl);
              const data = await response.json();
              for (var i = 0; i < data.length; i++) {
                if (data[i].nyame.common == "Peru") {
                  setData(data[i].capital);
                }
              }
            } catch (err) {
              setError(err);
            }finally{
                setLoading(false)
            }
          }
          setTimeout(()=>{
            fetchData()
          },4000)
         
    },[])

    if(loading){
        return <div>Loading....</div>

    }

    if(error){
        return <div>Error is {error.message}</div>
    }
    //  useEffect(()=>{
    //     console.log("Component Updated")
    // })



  return (
    <div>
        <h1>Life Cycle Demo </h1>
        {/* <p>Capital Of Peru is {data}</p> */}
        {/* <button onClick={()=>{data}}>Increment</button> */}
    </div>
  )
}

export default Class