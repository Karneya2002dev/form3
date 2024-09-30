import React, { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import validation from '../LoginValidation'
import axios from 'axios'
import './Login.css'



function Login  () {
  const[values,setValues]=useState({
    email:'',
    password:''
  })


 

const [errors,setErrors]=useState({});

const navigate = useNavigate();


const handleInput = (event)=>{
    setValues(prev=>({...prev, [event.target.name]: event.target.value}))
}
const handleSubmit =(event) =>{
    event.preventDefault();
    const validationError =validation(values);
    setErrors(validationError);

    
    if(errors.email === "" && errors.password === "")
      {
      axios.post('http://localhost:8081/login', values)
      .then(res =>{
        if(res.data.status==="success")
          {
            const username = res.data.username;

            localStorage.setItem('username', username); 
          navigate('/home');
        }
        else{
          alert("no record existed");
        }
      })
      .catch(err => console.log(err));
    }

}
 return (
    <div className='d-flex justify-content-center align-items-center bg-dark vh-100' id='bg'>
        
        <div className='bg-white p-3 rounded w-25'> 
        <h2>Get In...</h2>
            <form action='' onSubmit={handleSubmit}> 
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email:</strong></label>
                    <input type='email' placeholder='Enter your Mail Id' name='email'
                    onChange={handleInput}
                    className='form-control rounded-0' /> 
                     {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                   

                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password:</strong></label>
                    <input type='password' placeholder='Enter your password' name='password'
                    onChange={handleInput} className='form-control rounded-0' /> 
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    
                    <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Login</strong></button>
                    <p>You are agree to our terms and policies</p>  
                    <Link to="/register" className='btn btn-default border w-100 rounded-0 text-decoration-none'>Create an Account</Link>



            </form>
        </div>
    </div>
  )
}

export default Login;
