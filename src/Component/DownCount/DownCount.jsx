
import React, { useState, useEffect } from 'react';
import p2 from '../../assets/p2.jpeg'
import p3 from '../../assets/p3.jpeg'
import p4 from '../../assets/p4.jpeg'
import './Chat.css';
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import v1 from '../../assets/v1.mp4'
import gec from '../../assets/OIP.jpeg'
import c2 from '../../assets/c2.jpg'



function DownCount() {
  // Set the target date for the tech fest (replace with your event date)
  const targetDate = new Date('2024-09-31T00:00:00').getTime(); // Example: October 25, 2024

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Function to calculate the time left
  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeRemaining = {};
    if (difference > 0) {
      timeRemaining = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      timeRemaining = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeRemaining;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up the timer when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  return (
    <div 
    className='downcount'>
      <motion.div 
       variants={fadeIn('up', 0.2)}
       // initial="hidden"
       initial={{ opacity: 0 ,y:100}}
       whileInView={{ opacity: 1, y:0}}
       viewport={{ once: false, amount: 0.7 }}
       
       style={styles.container}>
        <h1>Countdown to Tech Fest 2024</h1>
        <div style={styles.timer}>
          <div style={styles.timeBlock}>
            <h2>{timeLeft.days}</h2>
            <p>Days</p>
          </div>
          <div style={styles.timeBlock}>
            <h2>{timeLeft.hours}</h2>
            <p>Hours</p>
          </div>
          <div style={styles.timeBlock}>
            <h2>{timeLeft.minutes}</h2>
            <p>Minutes</p>
          </div>
          <div style={styles.timeBlock}>
            <h2>{timeLeft.seconds}</h2>
            <p>Seconds</p>
          </div>
        </div>
      </motion.div>
      {/* 
  Blog Section */}
       <section id="blog" className="blog">
        {/* <h2>Latest Blog Posts</h2> */}
        <motion.div 
        
        className="blog-posts1">
          <article className="blog-post1 img ">
            <img src={gec} alt="gec" />
          </article>
          </motion.div>
        
          <div className="blog-posts2">
          <article className="blog-post2 vid">
          <iframe
  src={`${v1}?controls=1&autoplay=0&muted=1` }  // Correctly disable autoplay with autoplay=0
  frameBorder="0"
  allow="autoplay; encrypted-media"
  allowFullScreen/>

          </article>
          </div>

          <motion.div 
        
        className="blog-posts1">
          <article className="blog-post1 pho">
          <img src={c2} alt="c"/>
          </article>
          </motion.div>
        
          <div className="blog-posts2">
          <article className="blog-post2 ">
           <iframe src="https://www.youtube.com/embed/LwNgY4VjER0" frameborder="0"></iframe>
          </article>
          </div>
      </section> 

      {/* Sponsors Section */}
      <motion.section 
       variants={fadeIn('down', 0.2)}
       // initial="hidden"
       initial={{ opacity: 0 ,y: -50}}
       whileInView={{ opacity: 1, y:0}}
       viewport={{ once: false, amount: 0.7 }}

      id="sponsors" className="sponsors">
        <h2>Head Faculty</h2>
        <div className="sponsor-logos">
          <div className='allSponsor'>
            <img src={p2} alt="Sponsor 1" />
            <h4>VICE CHAIRMAN</h4>
            <p>Prof. Manas Ranjan Panda</p>
          </div>
          <div className='allSponsor'>
          <img src={p4} alt="Sponsor 2" />
          <h4>DIRECTOR</h4>
          <p>Srinivasa Rao Kaza</p>
          </div>
          <div className='allSponsor'>
          <img src={p3} alt="Sponsor 3" />
          <h4>PRINCIPAL</h4>
          <p>Dr BARADESWARAN A</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};




const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#fff',
    // backgroundColor: '#282c34',
    // minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '40px',
  },
  timer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    backgroundColor:'transparent',
    ...(window.innerWidth < 405 && {
      gap: '5px',
    })
  },
  timeBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    // backgroundColor: '#61dafb',
    background:'rgb(0, 0, 0, 0.3)',
    borderRadius: '5px',
  },

  
};

export default DownCount;













