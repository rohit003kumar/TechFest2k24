import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar'
import List from './Component/List/List'
import Item from './Component/Item/Item'
import About from './Component/About/About'
import Workshop from "./Component/Workshop/Workshop";
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import Register from './Component/Register/Register'
import HomePage from './Component/HomePage/HomePage'
import Results from './Component/Results/Results'




const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/event' element={<List/>}/>
        <Route path="/item" element={<Item/>}>
          <Route path=":itemId" element={<Item/>} />
        </Route>
        <Route path="/about" element={<About/>} />
        <Route path='/result' element={<Results/>}/>
        <Route path="/workshop" element={<Workshop/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/register" element={<Register/>}/>
     
  
     </Routes>
   
     <Footer/>
      </BrowserRouter>
    
    
      
    </>
  )
}

export default App