import React from 'react'
import './Home.css'
import video from '../../assets/video.mp4'
import robot from "../../assets/robot.png"
import robot2 from '../../assets/robot2.png'
import frame from '../../assets/frame.png'
import photo from '../../assets/pngegg.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import Animation from '../animation/animation'
import { Link } from 'react-router-dom'
import student from '../../assets/s2.png'





const Home = () => {
  return (
    <div className='home'>

      <div className="frame">
        <video src={video} type="video/mp4" autoPlay muted loop />
        <div className='frame-item'>

          <div className='frame-icon'>
            <div className='first'>
              <span className='gec'>GEC</span>
              <span>Autonomus College</span>
              <span>TechFest</span>
              <span>2K24</span>
            </div>

            <div className='frame-data'>
             <img src={frame} alt="" />
            </div>
          </div>


          <div className="robot">
            <div className="robot1">
              <img src={robot} alt="" />
            </div>

            <div className="robot2">
              <img src={robot2} alt="" />
            </div>
          </div>
        </div>
      </div>

   
      <div className='home-photo'>
   
      <Animation/>
        <div className='data-list'>
          <motion.div
            variants={fadeIn('up', 0.2)}
            // initial="hidden"
            initial={{ opacity: 0 ,x: -100}}
            whileInView={{ opacity: 1, x:0}}
            viewport={{ once: false, amount: 0.7 }}

            className='data'>
            <h5>#Participate and Enjoy real college Life</h5>
            <h1>Enjoy & Learn</h1>
            <p>Boost your <span>Creativity </span> and build your <span>Knowledge </span><br />with some new concept and Ideas and create <br />something which is useable.</p>

            <div className='button-content'>
            <Link to="/register"> <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='btn'>Participate Now</motion.button></Link>
              <a href="#" className='price'> <span>Atleast 1 Event</span> / Person</a>
            </div>
          </motion.div>
          <motion.div  variants={fadeIn('left', 0.2)}
            initial={{ opacity: 0 ,x:100}}
            whileInView={{ opacity: 1, x:0 }}
            viewport={{ once: false, amount: 0.7 }} className='icons'>
            <img src={student} alt="" />
          </motion.div>
        </div>




        </div>


      </div>
    




  )
}

export default Home;