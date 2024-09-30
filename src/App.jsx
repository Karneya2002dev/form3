import React from 'react'
import Login from '../Component/Login/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from '../Component/Register/Register'
import Home from '../Component/Home'
import NavBar from '../Component/Navbar/NavBar'

const App = () => {
  return (
<>
<BrowserRouter >
{/* Navigation bar. */}
<NavBar />
<Routes >
 <Route  path='/' element={<Login />}></Route>
 <Route path='/register' element={<Register />}></Route>
 <Route path='/home' element={<Home />} ></Route>
</Routes>
</BrowserRouter>
  

  


    
    </>
  )
}

export default App