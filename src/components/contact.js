
import { Fragment } from 'react';
import Map from './Map';
import MapContainer from './MapContainer';
import {headingDarken, paragraphDarken, h4 } from '../assets/theme';


export default() => (
    <>
       <div className="container">
         <h3 class="heading"> Contact Us</h3>
       </div>
      <MapContainer/>
      <div className="container card-info">
         <div className="card"> 
           <div className="row">
             <div className="col s12 m7">
               <h3> Get in touch </h3>
                <div className="row">
                  <div className="col s6">
                     <i className="material-icons">email</i>
                    <h4> Email</h4>
                    <a href="mailto:amarinompotwa@rocketmail.com">amarinompotwa@rocketmail.com</a>
                  </div>
                  <div className="col s6">
                     <i className="material-icons">call</i>
                    <h4> Call</h4>
                    <p>0713 571 599 or 0222 181057</p>
                  </div>
                  <div className="col s6">
                    <i className="material-icons">my_location</i>
                    <h4> Find Us </h4>
                    <p>Kariakoo, Uhuru Road/ Nyamwezi Street(near total petrol station)</p>
                  </div>
                  <div className="col s6">
                    <i className="material-icons">supervised_user_circle</i>
                    <h4 className="foll">Follow Us</h4>
                       <div className="row">
                         <div className="col s4">
                            <a href="#"> <i className="fab fa-facebook fa-2x"></i> </a>
                         </div>
                         <div className="col s4">
                            <a href="#"> <i className="fab fa-twitter fa-2x"></i> </a>
                         </div>
                         <div className="col s4">
                         <a href="#"> <i className="fab fa-instagram fa-2x "></i> </a>
                         </div>
                       </div>
                  </div>
                </div>
             </div>
             <div className="col s12 m5 more">
               <h3 >More contact</h3>
                 <ul>
                   <li>0715 658 040</li>
                   <li>0622 571 599</li>
                 </ul>
             </div>
           </div>
         </div>
      </div>
      <style jsx>{headingDarken}</style>
      <style jsx>{paragraphDarken}</style>
      <style jsx>{h4}</style>
      <style jsx>{`

      .heading{
        text-align: center;
      }
      .m7{
        background: white;
      }
       .m7, .m5{
         padding: 1rem 2rem !important;
         text-align: center;
       }
       .m5{
         text-align: unset;
         padding: 5rem;
       }
       .card{
        background: #009688;
       }
       .card-info{
         margin-top: 20rem;
         margin-bottom: 5rem;
       }
       .material-icons{
          font-size: 3rem;
          color: #23926B;
       }
       .more{
         color: #fff;
       }
       .fab{
         color: rgba(35, 146, 107, 0.5882352941176471);
       }
       li{
         margin-bottom: 2rem;
       }
       h3{
         margin-bottom: 3rem;
       }
       .foll{
         margin-bottom: 2rem;
       }
      `}</style>
    </>
);