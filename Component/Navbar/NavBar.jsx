import React from 'react';
import { Link,useNavigate} from 'react-router-dom';
import './NavBar.css'
import image from '../../Assets/pre.png'



const NavBar = () => {
  
const navigate =useNavigate();



const handleLogout=()=>{
  // const username = localStorage.getItem('username'); 
  localStorage.removeItem('username')
  navigate('/home')
  window.location.reload();
  
};
const isLoggedIn=localStorage.getItem('username') !==null



  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id='Con'>
      <a className="navbar-brand" href="/home" id='my'><img src={image} alt="" sizes="" srcset="" id='im' /></a>
      
      <div className="collapse navbar-collapse" id="navbarNav" >
        <ul className="navbar-nav ml-auto" >
          <li className="nav-item" >
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">Register</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Login</Link>
          </li>
         
          
         
        </ul>
         </div>


         {isLoggedIn && (
      <div id='logout' className='navbar-dark bg-dark'>
     <button onClick={handleLogout} className="btn btn-danger position-relative" >Logout</button>
   </div>
         )}
    </nav>
    
     
   </>
  );
};

export default NavBar;



  




