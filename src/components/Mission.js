import React from 'react';
import {headingDarken, paragraphDarken} from '../assets/theme';


export default () => (
    <section className="container" id="mission">
        <div className="row">
          <div className="col l6 push-l1 ">
            <img src="../static/background-mission.svg" className="responsive-img"/>
          </div>
          <div className="col s12 l6 pull-l1 ">
             <h3>Our  mission</h3>
             <p>We seek to use the power of technological innovation to uplift the standard of living in our rural community. We use a computer as an educational resource tool, has not replaced the role of manuals or books. We seek to provide affordable, client-oriented products and services, with continuous improvement on quality and note everlasting relationship and potential clients.</p>
          </div>
        </div>
       
        <style jsx>{headingDarken}</style>
        <style jsx>{paragraphDarken}</style>
        <style jsx>{`
          h3{
              margin: 1rem 0 2rem;
          }
          .container{
              padding: 2rem 0;
          }
        `}</style>
   </section>
)