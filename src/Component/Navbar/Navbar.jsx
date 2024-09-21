import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { motion, useScroll } from "framer-motion"
import { fadeIn } from '../../variants'


const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [show, setShow] = useState(" navbar-list");
  const handleClick = () => {
    setShow('  navbar-list active');
    console.log(show);
  }
  const handleClickRemove = () => {
    setShow(' navbar-list remove');
  }
  const { scrollYProgress } = useScroll();
  
  return (
    <>
     <div className="nav-bar">
      <div className="navbar-item">
        <div className="fest">
          <img src={logo} alt=""/>
          {/* <p>GEC </p> */}
        </div>

        <div className={show}>
        <div className="box">
          <div className='bar'>
            <ul  className='nav'>
            
              <li onClick={() => { setMenu("home") }}><Link to='/' style={{textDecoration:"none"}} >
              <i className="fa-solid fa-house"></i>Home</Link>{menu === "home" ?<hr/>: <></>}</li>

              <li onClick={() => { setMenu("event") }}> <Link to='/event' style={{textDecoration:"none"}}> <i className="fa-solid fa-laptop"></i> Event</Link>{menu === "event" ?<hr/>: <></>}</li>
              <li  onClick={() => { setMenu("about") }}> <Link to='/about' style={{textDecoration:"none"}}> <i className="fa-regular fa-address-card"></i>About </Link>{menu === "about" ?<hr/>: <></>}</li>
            </ul>
          </div>

          <div className='bar'>
            <ul className='nav'>
              <li onClick={() => { setMenu("result") }}> <Link to='/result' style={{textDecoration:"none"}}> <i className="fa-solid fa-award"></i>Result </Link>{menu === "result" ?<hr/>: <></>}</li>
              <li onClick={() => { setMenu("workshop") }}> <Link to='/workshop' style={{textDecoration:"none"}}> <i className="fa-solid fa-eject"></i>WorkShop</Link>{menu === "workshop" ?<hr/>: <></>}</li>
              <li onClick={() => { setMenu("contact") }}> <Link to='/contact' style={{textDecoration:"none"}}> <i className="fa-regular fa-address-book"></i>Contact-Us</Link>{menu === "contact" ?<hr/>: <></>}</li>
              <Link to="/register"><button>Register</button></Link>
              <i onClick={(handleClickRemove)} className="fa-solid fa-circle-xmark"></i>
            </ul>
          </div>


        </div>
        </div>
        <i onClick={(handleClick)} className="fa-solid fa-bars"></i>

      </div>
</div>
    </>
  )
}

export default Navbar