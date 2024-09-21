import React from 'react'
import './ItemDisplay.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import Video from '../Video/Video'
import { div } from 'framer-motion/client'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const ItemDisplay = (props) => {
  const { event } = props;
  const [text, setText] = useState('about');

  return (
    <div className='item-display'>
      <motion.h1 variants={fadeIn('down', 0.2)}
        initial={{ opacity: 0 ,y: -50}}
        whileInView={{ opacity: 1, y:0}} >{event.event_name}</motion.h1>

      <div className='display'>
        <motion.div 
        variants={fadeIn('right', 0.2)}
        initial={{ opacity: 0 ,x: -50}}
        whileInView={{ opacity: 1, x:0}}
        viewport={{ once: false, amount: 0.7 }} className='display-img'>
          <img src={event.event_image} alt="" />
        </motion.div>

        <motion.div 
        variants={fadeIn('left', 0.2)}
        initial={{ opacity: 0 ,x: 50}}
        whileInView={{ opacity: 1, x:0}}
        viewport={{ once: false, amount: 0.7 }}
        className='display-text'>
          <div className="show-button">
            <button className={text === 'about' ? 'on' : ''} onClick={() => { setText('about') }}>About</button>
            <button className={text === 'date' ? 'on' : ''} onClick={() => { setText('date') }}>Date</button>
            <button className={text === 'coordinator' ? 'on' : ''}  onClick={() => { setText('coordinator') }}>Coordinator</button>
            <button className={text === 'rule' ? 'on' : ''} onClick={() => { setText('rule') }}>Rule</button>
            <button className={text === 'contact' ? 'on' : ''} onClick={() => { setText('contact') }}>Contact</button>
            <button className={text === 'faqs' ? 'on' : ''} onClick={() => { setText('faqs') }}>FAQS</button>

          </div>
          <div className="text">

            <div className={text == 'about' ? 'show' : 'close'}>
              <p>{event.event_about}</p>
            </div>

            <div className={text == 'contact' ? 'show' : 'close'}>
              <p>{event.contact_event.phone}</p>
              <p>{event.contact_event.email}</p>
            </div>

            <div className={text == 'date' ? 'show' : 'close'}>
              <h6>Round 1:</h6>
              <p className='b1'><b>Event Date : </b>{event.event_date}</p>
              <p className='b2'><b>Event Time : </b>{event.event_time}</p>
            </div>

            <div className={text == 'coordinator' ? 'show' : 'close'}>
              <p className='b1'><b>Event Teacher Coordinator :</b> {event.event_teacher_coordinator}</p>
              <p className='b2'><b>Event Student Coordinator : </b>{event.event_coordinator}</p>
            </div>

            <div className={text === 'rule' ? 'show' : 'close'}>
              {event.event_rules_and_regulations.map((rule, i) => (
                <p key={i}>{i + 1} : {rule}</p>
              ))}
            </div>

            <div className={text === 'faqs' ? 'show' : 'close'}>
                {event.event_faqs.map((faq, faqIndex) => (
                   <details>
                    <summary key={faqIndex}><strong>Q:</strong> {faq.question}</summary> 
                    <p><strong>A:</strong> {faq.answer} </p>
                   </details>
                  
                ))}
             
            </div>

          </div>
          <div className='bbt'>
            <Link to="/register"><button className='btn1'>Register</button></Link>
            <a href="https://api.whatsapp.com/send?phone=+919776066333&text=Hii."><button className='btn2'>whatsaap</button></a>
          </div>
        </motion.div>
      </div>
      <Video  event={event}/>
    </div>
  )
}

export default ItemDisplay

