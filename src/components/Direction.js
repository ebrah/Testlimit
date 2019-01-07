
import React from 'react';

export default (props) => (
    <section className="direction">
        <a href={props.url} className="direction__btn"> <i className="material-icons fadeout teal-text">keyboard_arrow_down</i></a>

        <style jsx>{`
        .direction{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 15px 5px;
            margin: 2rem;
          }
          .direction__btn{
              position: relative;
              width: 30px;
              height: 58px;
              border: 1px solid #00695c;
              border-radius: 20px;
              display: flex;
              padding: 5px;
              justify-content: center;
              align-items: flex-end;
          }
          .direction__btn::before, .direction__btn::after{
             content: '';
             position: absolute;
             background: #00695c;
          }
          .direction__btn::before{
              width: 2px;
              top: 14px;
              height: 10px;
              animation: fadeOutDown 1s ease  infinite;
          }
          .direction__btn::after{
              width: 4px;
              top: 28px;
              height: 4px;
              border-radius: 50%;
          }
          /* animation */
          .fadeout{
            animation: fadeOutDown 1.099s ease  infinite;
          }
          @-webkit-keyframes fadeOutDown {
              from {
                opacity: 0;
              }
            
              to {
                opacity: 1;
                -webkit-transform: translate3d(0%, 30%, 0);
                transform: translate3d(0%, 30%, 0);
              }
            }
            
            @keyframes fadeOutDown {
              from {
                opacity: 1;
              }
            
              to {
                opacity: 0;
                -webkit-transform: translate3d(0, 30%, 0);
                transform: translate3d(0, 30%, 0);
              }
            }
            /* animation */
        `}</style>
    </section>
 );
