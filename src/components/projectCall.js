
import { useEffect } from 'react';
import $ from 'jquery';
import Button from './Button';

export default () => {
    
    useEffect(() => {
        $('.parallax').parallax();
    });
    return (
      <div className="parallax-container">
        <div className="parallax"><img src="../../static/workshop4.svg"/></div>
         <div className="container">
              <h3> Have a Project we can help with ?</h3>
              <Button/>
         </div>
         <style jsx>{`
            .parallax-container{
                background: rgba(167, 176, 173, 0.49);
                color: #FFFFFF;
            }
            h3{
                margin-bottom: 5rem;
            }
            .container{
                display:flex;
                flex-direction: column;
                justify-content:center;
                height: 100%;
                align-items: center;
            }
         `}</style>
      </div>
    );
}