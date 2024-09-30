import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  const[username,setUsername]=useState('');
  const navigate=useNavigate();

  useEffect(()=>{
    const storedUsername=localStorage.getItem('username');
    // console.log("Stored Username:", storedUsername);
    if(storedUsername){
      setUsername(storedUsername)
    }
    else{
      navigate('/home')
    }
  },[navigate]);
  

  return (
    <>
   
    <div className="d-flex justify-content-center align-items-center vh-100" id='img'>
      <div className="p-3 rounded w-50 text-center">
        <h1 className='wel'>Welcome, {username}!</h1>
        <p id='text'>We are happy to see you😍!!</p>
        {/* You can add a logout button or other components */}
        
      </div>
    </div>
    
    
    
    
    
    
    </>
  )
}

export default Home