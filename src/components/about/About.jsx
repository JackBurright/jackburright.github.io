import React from 'react'
import './about.css'
import ME from '../../assets/Selfie.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (

    <section id ='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
            <div className='about__me-image'>
              <img src={ME} alt="About Image" />
            </div>
        </div>
        <div className='about__content'>
          {/* <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ world wide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ completed projects</small>
            </article>
          </div> */}
          <p>Hey there! I'm Jack Burright, a recent graduate with a Bachelor of Science degree in Computer Science from Creighton University. I grew up in Minnesota and have an absolute love for diving into the world of technology and learning everything I can get my hands on.</p>
          <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        
        </div>
      </div>
    </section>
  )
}

export default About