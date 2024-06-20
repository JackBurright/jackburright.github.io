import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/NCUR2023 Poster-1.png'
import P1 from '../../assets/NCUR2023 Poster.pdf'
import IMG2 from '../../assets/TwitterPoster2.png'
import P2 from '../../assets/TwitterPoster2.pdf'
import IMG3 from '../../assets/TwitterPoster1.png'
import P3 from '../../assets/TwitterPoster1.pdf'
import IMG4 from '../../assets/AnnSim2023.png'
import P4 from '../../assets/ANNSIM23.pdf'
import P5 from '../../assets/websitePhoto.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>

      <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Utilizing NetLogo to Simulate Mobs: An Agent-based Modeling Approach</h3>
          <div className='portfolio__item-cta'>
            <a href={P1} download className='btn'>Poster Download</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
          <h3>An Agent-Based Model of Mobs Using Theoretical Constructs of Collective Action</h3>
          <div className='portfolio__item-cta'>
            <a href={P4} download className='btn'>Conference Publication</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>Social Media Analysis of Sentiment Regarding Health During the COVID-19 Pandemic</h3>
          <div className='portfolio__item-cta'>
          <a href={P2} download className='btn'>Poster Download</a>
            
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>Sentiment of Health; Twitter Analysis</h3>
          <div className='portfolio__item-cta'>
            
          <a href={P3} download className='btn'>Poster Download</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={P5} alt="" />
          </div>
          <h3>Personal Website</h3>
          <div className='portfolio__item-cta'>
            
          <a href= 'https://github.com/JackBurright/PersonalWebsite' target='_blank' className='btn'>Github Code</a>
          </div>
        </article>
        
        
        
        
        
        
       


        
      </div>
    </section>
  )
}

export default Portfolio