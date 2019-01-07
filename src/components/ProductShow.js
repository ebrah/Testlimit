

import {useEffect} from 'react';
import {headingDarken} from '../assets/theme';


export default () => { 
  
  useEffect(() => {
     const  WOW = require('wow.js');
    $('.carousel.carousel-slider').carousel({
      fullWidth: true
    })

    const wow = new WOW();
    wow.init();
  })

  return (
  <div className="container">
     <h3 className="wow rubberBand" data-wow-delay="0.5">Our selling Products</h3>
      <div className="carousel carousel-slider">
          <a className="carousel-item" href="#one!"><img src="https://lorempixel.com/800/300/food/1" className="responsive-img"/></a>
          <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/800/300/food/2" className="responsive-img"/></a>
          <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/800/300/food/3" className="responsive-img"/></a>
     </div>

     <style jsx>{ headingDarken }</style>
     <style jsx>{`
         .container{
        
           padding-bottom: 0;
         }
         h3{
           text-align:center;
           margin: 2rem 0;
          
         }
     `}</style>
  </div>
  )
}