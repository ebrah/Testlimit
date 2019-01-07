
import { useEffect } from 'react';
import $ from 'jquery';
import AOS from 'aos';

export default () => {
 
    useEffect(() => {
        $('.parallax').parallax();
         AOS.init(); 
    });
    return (
      <div className="parallax-container">
        <div className="parallax"><img src="../../static/contact-hero-img.png"/></div>
         <div className="container">
              <h3 className="abt-title" data-aos="fade-up" data-aos-duration="1000" > Who we are ?</h3>
            <div className="row">
               <div className="col s6 m3 arrange-txt" data-aos="fade-up">
                  <h3> 80 </h3>
                  <h5> Projects Completed </h5>
               </div>
               <div className="col s6 m3 arrange-txt">
                  <h3> 3 </h3>
                  <h5> Year of experience</h5>
               </div>
               <div className="col s6 m3 arrange-txt">
                  <h3> 6 </h3>
                  <h5> Exibition </h5>
               </div>
               <div className="col s6 m3 arrange-txt">
                  <h3> 100% </h3>
                  <h5> Happy clients </h5>
               </div>
            </div>
         </div>
         <style jsx>{`
           .arrange-txt{
              display:flex;
              flex-direction:column;
              justify-content: space-between;
             
           }
           .abt-title{
              text-align:center;
              margin-bottom: 8vh;
           }
            h3{
              padding: 0 2rem;
           }
           .parallax-container{
               background: rgba(35, 146, 107, 0.93);
               padding: 5rem 0 5rem;
               color: #FFFFFF;
               height: 70vh;
              
           }

         `}</style>
      </div>
    );
}