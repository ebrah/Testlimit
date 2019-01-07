
import React, { useEffect } from 'react';
import $ from 'jquery';

export default () => {

  useEffect(() => {
     if(typeof window !== 'undefined'){
          window.$ = $;
          window.jQuery = $;
     }
      $('.slider').slider();
  });

return (
 <section className="hero">
    <div className="slider">
        <ul className="slides">
            <li>
            <img src="../../static/mobile_service.svg"/>
            <div className="caption center-align teal-text text-lighten-5">
                <h3>Mobile Phone Services!</h3>
                <h5 className="light">Power supply problems, Touch & Display replacement and more..</h5>
            </div>
            </li>
            <li>
            <img src="../../static/computer_services.svg"/> 
            <div className="caption left-align teal-text text-lighten-5">
                <h3>Computer Services!</h3>
                <h5 className="light">Power supply problems, Display problems and more..</h5>
            </div>
            </li>
            <li>
            <img src="../../static/project_consultation.svg"/> 
            <div className="caption right-align teal-text text-lighten-5">
                <h3>Project Consultation!</h3>
                <h5 className="light">Networking - Design & installation, Developing boards and more..</h5>
            </div>
            </li>
            <li>
            <img src="../../static/software_services.svg"/> 
            <div className="caption center-align teal-text text-lighten-5">
                <h3>Software Services!</h3>
                <h5 className="light">Operatimg system, anti-virus and more..</h5>
            </div>
            </li>
        </ul>
    </div>          
</section>
 );
}