import React ,{useState}from 'react'
import { Link ,useNavigate}  from 'react-router-dom'
import './Register.css'
import validation from '../RegisterValidation'
import axios from 'axios'




function Register  ()  {
    const[values,setValues]= useState({
        firstname:'',
        lastname:'',
        email:'',
        password:''
      })
      

      const navigate = useNavigate();
    const [errors,setErrors]=useState({});
    const handleInput = (event)=>{
        setValues(prev=>({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit =(event) =>{
        event.preventDefault();
        setErrors(validation(values));
        if(errors.name === "" && errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/Register', values)
            .then(res => {
                navigate('/')
            })
            .catch(err =>console.log(err));
        }
    
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100 ' id='con'>
        
    <div className='bg-white p-3 rounded w-25'> 
    <h3>Process To Get In...</h3>
        <form action=''  onSubmit={handleSubmit}> 
            <div className='mb-3'>
                <label htmlFor='name'><strong>First Name:</strong></label>
                <input type='text'  placeholder='Enter your First Name' name='firstname'
                onChange={handleInput}
                className='form-control rounded-0'  /> 
                {errors.name && <span className='text-danger'>{errors.name}</span>}
                </div>
            
            <div className='mb-3'>
                <label htmlFor='name'><strong>Last Name:</strong></label>
                <input type='text'  placeholder='Enter your Last Name' name='lastname'
                onChange={handleInput}
                className='form-control rounded-0'  /> 
                {errors.name && <span className='text-danger'>{errors.name}</span>}
                </div>
                
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email:</strong></label>
                    <input type='email' placeholder='Enter your Mail Id' name='email'
                    onChange={handleInput}
                     className='form-control rounded-0'/> 
                     {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    
                <div className='mb-3'>
                <label htmlFor='password'><strong>Password:</strong></label>
                <input type='password' placeholder='Enter your password' name='password'
                onChange={handleInput}
                 className='form-control rounded-0' /> 
                  {errors.password && <span className='text-danger'>{errors.password}</span>}

                </div>
               
                <button type="submit" className='btn btn-success w-100 rounded-0'><strong>Register</strong></button>
                <p>You are agree to our terms and policies</p>
                <Link to="/" className='btn btn-default border w-100 rounded-0 text-decoration-none'>Get In</Link>



        </form>
    </div>
</div>
  )
}

export default Register