
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Head from './Components/Head/Head'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Product from './Components/Product/Product'



function App() {
  
  return (
    <>
  <Head/>
  <Navbar/>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Product/:id' element={<Product/>}/>

  </Routes>
  
  
    </>
     
  )
}

export default App
