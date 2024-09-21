import React from 'react'
import './Footer.css'
import gec from '../../assets/g.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const Footer = () => {
  return (
    <motion.div
    variants={fadeIn('up', 0.2)}
    // initial="hidden"
    initial={{ opacity: 0 }}
    whileInView={{opacity:1}}
    viewport={{ once: false, amount: 0.7 }}

    className="footer">
        <div className="row">
          <div className="col">
            <img src={gec} alt="" className='logo' />
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, minus, vitae repellat quibusdam perspiciatis error esse, nemo saepe rem officiis aliquid magni id qui. Modi alias itaque enim rem obcaecati?</p>

          </div>
          <div className="col">
            <h3>College <div className="underline"><span></span></div></h3>
            <p>Gandhi Engineering college, Bhubaneswar</p>
            <p>Madanpur,Near Janla</p>
            <p>Orissa, pin-code: 752054</p>
            <p className='email-id'>@gec.edu.in</p>
            <h6>91+ 000000000</h6>
          </div>
          <div className='col'>
            <h3>Links <div className="underline"><span></span></div></h3>
            <ul>
              <li><Link to='/' style={{textDecoration:"none"}}>Home </Link></li>
              <li><Link to='/event' style={{textDecoration:"none"}}>Event </Link></li>
              <li><Link to='/workshop' style={{textDecoration:"none"}}>Workshop</Link></li>
              <li><Link to='/about' style={{textDecoration:"none"}}>About</Link></li>
              <li><Link to='/contact' style={{textDecoration:"none"}}>Contact</Link></li>
            </ul>
          </div>
          <div className='col'>
            {/* <h3>Newsletter <div className="underline"><span></span></div></h3> */}
            <form>
              <i className="fa-regular fa-envelope far "></i>
              <input type="email" placeholder="enter email id" required />
              <button type="submit"><i className="fa-solid fa-arrow-right fas"></i></button>
            </form>
            <div className='social-icons'>
            <a href='https://www.youtube.com/results?search_query=gec+college+bhubaneswar'> <i class="fa-brands fa-youtube fab"></i></a>
            <a href='https://api.whatsapp.com/send?phone=+919776066333&text=Hii.'><i class="fa-brands fa-whatsapp fab"></i></a>
            <a href="https://www.facebook.com/gecbbsrofficial/"><i class="fa-brands fa-facebook fab"></i></a>
            <a href="https://x.com/gecbbsr2018?s=09"><i class="fa-brands fa-twitter fab"></i></a>
            </div>
          </div>
          </div>
          <hr/>
          {/* <p className="copyright">Lorem ipsum dolor siti veniam excepturi.</p> */}
        
    </motion.div>
  )
}

export default Footer