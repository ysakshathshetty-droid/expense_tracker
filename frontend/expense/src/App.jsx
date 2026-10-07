import { useState } from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Mainpage from './components/Mainpage'
import Viewall from './components/Viewall'
import Editexpense from './components/Editexpense'
import { ToastContainer,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
function App() {
 

  return (
  <BrowserRouter>
  <ToastContainer position='top-center'/>
  <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/login' element={<Login/>}/>
     <Route path='/signup' element={<Signup/>}/>
     <Route path='/mainpage' element={<Mainpage/>}/> 
     <Route path="/viewall" element={<Viewall/>}/>
  </Routes>
  <Editexpense/>
  </BrowserRouter>
  )
}

export default App
