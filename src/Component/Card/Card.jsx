import React from 'react'
import image1 from '../../assets/robotics.jpg'
import './Card.css'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <motion.div
    variants={fadeIn('up', 0.2)}
    initial={{ opacity: 0 ,x: -50}}
    whileInView={{ opacity: 1, x:0}}
    viewport={{ once: false, amount: 0.7 }}
   
    // }}
 
      className="card" >
      <div className='item'>
    <Link to={`/item/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} className="card-img-top" alt=" "/></Link>
    <div className='detail'>
        <div className='prize'>
        {/* <h4>Prize INR :1000</h4> */}
        </div>
        <div className='para'>
        <p>Test Your Coding Skills By Answering Coding Question Effciently And Solve Real Life Problem Through Coding.</p>
        </div>
    </div>
    </div>
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <p className="card-text">{props.about}</p>
      
       <Link to={`/item/${props.id}`}><button className='e-btn'>Explore</button></Link>
    </div>
  </motion.div>
 )
}

export default Card