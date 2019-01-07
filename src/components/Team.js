
import { useEffect } from 'react';
import $ from 'jquery';
import {headingDarken} from '../assets/theme';

export default () => {
    useEffect(() => {
        $('.carousel').carousel();
    })
    return (
        <div className="container">
         <h3>Get to Know Us</h3>
        <div className="carousel">
            <a className="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"/> 
              <div className="prof center-align">
                 <h6>Amarino Mpotwa</h6>
                 <p>DIRECTOR</p>
              </div>
            </a>
            <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"/>
                <div className="prof center-align">
                    <h6>Sanja Abihud</h6>
                    <p>TECHNICIAN</p>
                </div>
            </a>
            <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"/>
               <div className="prof center-align">
                  <h6>Jackline</h6>
                  <p>SECRETARY</p>
               </div>
            </a>
            <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"/> 
                    <div className="prof center-align text-teal text-darken-4">
                    <h6>Erick</h6>
                    <p>TECHNICIAN</p>
                </div>
            </a>
      </div>
      <style jsx>{headingDarken}</style>
      <style jsx>{`
        h3{
            text-align:center;
        }
        .prof{
            border: 1px solid;
            margin: 0;
        }
        .container{
            padding: 10vh 0;
        }
      `}</style>
    </div>
    )
}