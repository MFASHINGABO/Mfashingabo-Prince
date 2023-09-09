import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'


const Portfolio =()=> {
  return (
    <section id='portfolio'>
     <h5> My Recent Work</h5>
     <h2>Portfolio</h2>

    <div className="container portfolio__container">
        <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG1} alt=""/>
            </div>
           <h3>Audio-Mac-Recorder with Vanilla js and Css3</h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com" className='btn' target='_blank'>Github</a>
           <a href="https://dribbble.com/alien_pixels" className='btn btn-primary' target='_blank'> Live Demo</a></div>
        </article>
                <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG2} alt=""/>
            </div>
           <h3>Cleaning Management System with Express , MongoDB</h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com" className='btn' target='_blank'>Github</a>
           <a href="https://dribbble.com/alien_pixels" className='btn btn-primary' target='_blank'> Live Demo</a></div>
        </article>
                <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG3} alt=""/>
            </div>
           <h3>Biometric Voting System with SpringMVC ,Spring Security ,...</h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com" className='btn' target='_blank'>Github</a>
           <a href="https://dribbble.com/alien_pixels" className='btn btn-primary' target='_blank'> Live Demo</a></div>
        </article>
        
    </div>
    </section>
  )
}

export default Portfolio
