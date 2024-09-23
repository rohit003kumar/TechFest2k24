


import React from 'react'
import styles from './Results.module.css'
import result from '../../assets/detail'

const Results = () => {
    return (
        <section className={styles['Result-body']}>
            <div className={styles['Result-heading']}>
                <h1>TechFest 2K24 Results</h1>
                <p>Celebrating Innovation and Excellence</p>
            </div>

            <div className={styles["Result-container"]}>
                <div className={styles["Result-innerBody"]}> 
                    {result.map((result, i) => (
                        <div key={i} className={styles["Result-cards"]}>
                            <img src={result.event_image} alt="" />
                            <div className={styles["event-name"]}>
                                <h3>{result.event_name}</h3>
                            </div>
                            <div className={styles["winner-list"]}>
                                <ul className={styles["Result-details"]} style={{ listStyleType: 'none' }}>
                                    <a href="#">
                                        <li className={styles["Result-winners"]}>
                                            <span>Round 1</span>
                                            <span className={styles.icon}><i className="ri-arrow-right-wide-fill"></i></span>
                                        </li>
                                    </a>
                                    <a href="#">
                                        <li className={styles['Result-winners']}>
                                            <span>Round 2</span>
                                            <span className={styles.icon}><i className="ri-arrow-right-wide-fill"></i></span>
                                        </li>
                                    </a>
                                    <a href="#">
                                        <li className={styles["Result-winners"]}>
                                            <span>Round 3</span>
                                            <span className={styles.icon}><i className="ri-arrow-right-wide-fill"></i></span>
                                        </li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Results;
