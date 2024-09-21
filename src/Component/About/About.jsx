

import React from 'react';
import styles from './About.module.css';
import img1 from '../../assets/k1.jpg';
import img2 from '../../assets/k2.jpg';
import img3 from '../../assets/k3.jpg';
import img4 from '../../assets/k4.jpg';
import img7 from '../../assets/k7.jpg';
import img6 from '../../assets/k6.jpg';
import img11 from '../../assets/kk1.jpg';

const About = () => {
  return (
    <section className={styles.main}>
      <div className={styles.heading}>
        <span>
          <h1>About-Us</h1>
        </span>
      </div>
      <div className={styles.container}>
        <section className={styles.about}>
          <div className={styles['about-img']}>
            <h1 className={styles.gectag}>GEC</h1>
          </div>
          <div className={styles['about-content']}>
            <h1 className={styles.tech24}>
              <span className={styles.tech}>Tech</span>Fest <span className={styles.twenty}>2K24</span>
            </h1>
            <p className={styles['lightbox-content']}>Innovate, Connect, Succeed</p>
            <p className={styles['lightbox-content2']}>
              Welcome to TechFest 2024, the premier technology festival of the year hosted by Gandhi Engineering Autonomous College. 
              This Fest is designed to bring together technology enthusiasts, industry leaders, and innovators for a dynamic xyz-day event.
              Our goal is to inspire, educate, and connect people passionate about technology.
            </p>
          </div>
        </section>
        <section className={styles.about2}>
          <div className={styles['about-content2']}>
            <h2>Our Mission is to:</h2>
            <dl>
              <dt className={styles.firstdl}>Innovate:</dt>
              <dd className={styles.firstdd}>Showcase the latest advancements in technology and foster new ideas.</dd>
              <dt className={styles.seconddl}>Connect:</dt>
              <dd className={styles.seconddd}>Create networking opportunities for participants to meet and collaborate
                with industry professionals and peers.
              </dd>
              <dt className={styles.thirddl}>Educate:</dt>
              <dd className={styles.thirddd}>Offer hands-on workshops, keynote sessions, and panel discussions to 
                enhance knowledge and skills.
              </dd>
            </dl>
          </div>
          <div className={styles['about-img2']}>
            <img src={img11} alt="" />
          </div>
        </section>
        <section className={styles.about3}>
          <div className={styles['about-content3']}>
            <h2 className={styles.event} data-text="Event Details">Event Details</h2>
            <div className={styles.information}>
              <div className={`${styles.date} ${styles.info}`}>
                <h3>Dates</h3>
                <h4>00/00/0000</h4>
              </div>
              <div className={`${styles.location} ${styles.info}`}>
                <h3>Location</h3>
                <h4>GEC Autonomous College</h4>
              </div>
              <div className={`${styles.time} ${styles.info}`}>
                <h3>Time</h3>
                <h4>00:00hrs to 00:00hrs</h4>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.about4}>
          <div className={styles['about-content4']}>
            <h2>Our History</h2>
            <p>Founded in 2006, TechFest has grown from a small campus event into one of the largest tech
              festivals in the region. Our journey began with a vision to bridge the gap between technology
              and its practical applications. Over the years, we have expanded our scope, welcoming increasing
              order of participants each year and featuring a diverse range of activities.
            </p>
          </div>
        </section>
        <section className={styles.about5}>
          <div className={styles['about-content5']}>
            <h2>Here are some photos and videos of previous Fests</h2>
            <table>
              <tbody>
                <tr>
                  <td><img src={img1} alt="Previous-Fest-Images" /></td>
                  <td><img src={img2} alt="Previous-Fest-Images" /></td>
                  <td><img src={img3} alt="Previous-Fest-Images" /></td>
                  <td>
                    <iframe width="560" height="315"
                      src="https://www.youtube.com/embed/MHr5dE2enaU?si=ZZl5a4NyZbQWbmYo"
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                  </td>
                </tr>
                <tr>
                  <td><img src={img4} alt="Previous-Fest-Images" /></td>
                  <td><img src={img6} alt="Previous-Fest-Images" /></td>
                  <td><img src={img7} alt="Previous-Fest-Images" /></td>
                  <td>
                    <iframe width="560" height="315"
                      src="https://www.youtube.com/embed/f1ieYilp2u0?si=LoTRtVDwHwoVR9xx"
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </section>
  )
}

export default About;
