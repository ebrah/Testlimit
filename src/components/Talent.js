
import { useEffect } from 'react';
import $ from 'jquery';
import { headingDarken, paragraphDarken } from '../assets/theme';

export default () => {
    
    useEffect(() => {
        $('.parallax').parallax();
    });
    return (
      <div className="parallax-container">
        <div className="parallax"><img src="../../static/talent-img.svg"/></div>
         <div className="container">
              <div className="contents">
                <h3 className="talent-title"> TALENT </h3>
                <p>was founded in 2004 as a provider of innovative computer related products, I.C.T. Solutions for corporate customers and computer literacy. The company is currently focused on providing a broad mix of I.C.T products and services to customers who are in need to improve their companies or lifestyle.</p>
              </div>
         </div>
   
         <style jsx>{ headingDarken }</style>
         <style jsx>{ paragraphDarken }</style>
         <style jsx>{`
           h3, p{
            color: #FFFFFF;
           }
           h3{
               margin-bottom: 10vh;
               font-weight: 200;
           }
           .parallax-container{
              background: rgba(35, 146, 107, 0.83);
           }
           .container{
               display: flex;
               justify-content: center;
               align-items: center;
               height: 100%;
           }
           .contents{

           }
           .parallax-container{
               height: 80vh;
           }
         `}</style>
      </div>
    );
}