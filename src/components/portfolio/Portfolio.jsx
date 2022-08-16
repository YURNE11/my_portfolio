import React from 'react'
import './portfolio.css'
import IMG from '../../assets/forum 2.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

function Portfolio() {
  return (
    <section id="portfolio">
      <h5> My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG} alt='' />
          </div>
          <h3>Site De Streaming</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/YURNE11' className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='' />
          </div>
            <h3>portfolio title</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/YURNE11' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt='' />
          </div>
            <h3>portfolio title</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/YURNE11' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt=''  />
          </div>
            <h3>portfolio title</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/YURNE11' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt='' />
          </div>
            <h3>portfolio title</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/YURNE11' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt='' />
          </div>
            <h3>portfolio title</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/YURNE11' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live demo</a>
            </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio