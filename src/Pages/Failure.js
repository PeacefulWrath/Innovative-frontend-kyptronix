import React from 'react'
import { useNavigate } from 'react-router-dom'



function Failure() {
  const navigate=useNavigate()
  return (
    <>
    <div>Failure</div>
    <button onClick={()=>{
      navigate("/home")
    }}>
      Go to home page
    </button>
    </>
  )
}

export default Failure