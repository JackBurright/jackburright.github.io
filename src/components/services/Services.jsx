import React from 'react'
import './hobbies.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'> 
      <h5>Things I Enjoy</h5>
      <h2>Hobbies</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>
              Spending Time Outdoors
            </h3>
          </div>
          <div className='service__body'>
            <p>I am a passionate outdoor enthusiast one place that holds a special place in my heart is the Boundary Waters. This wilderness area in northern Minnesota built my obsession with canoeing and camping. From a young age, I was appointed the position of the official fire starter and caretaker.</p>
          </div>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>
             Random Interests
            </h3>
          </div>
          <div className='service__body'>
            <p>I am a very obsessive person in everything I do recently I have been engulfed in learning how to solve Rubix Cubes, play chess, and picking locks.</p>
          </div>
        </article>




        <article className='service'>
          <div className='service__head'>
            <h3>
              Serving Others
            </h3>
          </div>
          <div className='service__body'>
            <p>Service is a core value I hold dear. Currently, I'm actively involved in Big Brothers Big Sisters, where I serve as a mentor and friend to a ten-year-old in Omaha. Being the youngest in my family, this experience has been transformative, teaching me valuable lessons about the essence of service.</p>
          </div>


          
        </article>
      </div>
    </section>
    
  )
}

export default Services