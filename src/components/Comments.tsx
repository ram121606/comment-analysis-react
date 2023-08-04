// import React from 'react'
import { useState } from "react"
import axios from "axios"

const Comments = () => {

    const [comment , setComment] = useState("")
    const [result , setResult] = useState("")

    function handleSubmit(){
        axios.post("http://localhost:8000/predict",{comment:comment}).then(resp=>{
            setResult(resp.data);
        })
    }

  return (
    <div>
        <input type="text" name="comments" value={comment} placeholder="Enter a comment" onChange={(e)=>setComment(e.target.value)} style={{width:"150px",height:"30px"}}/>
        <button onClick={handleSubmit}>Submit</button><br/>
        <h3>Result : {result}</h3>
    </div>
  )
}

export default Comments