 
import {paragraphDarken, h4, headingDarken } from "../assets/theme";

export default() => (

    <div className="testimonial">
    <div className="overlay"></div>
    <div className="container">
       <h3> Real Words from Real People </h3>
       <div className="row">
         <div className="col s12 m4">
           <h4> 3-year customer </h4>
           <p>I have always been truly impressed and pleased with the level of professionalism and quality of service.</p>
         </div>
         <div className="col s12 m4">
           <h4> 2-year customer </h4>
           <p>Their customer service is always outstanding! I continually recommend this place to my friends, family & collegues.</p>
         </div>
         <div className="col s12 m4">
           <h4> *New Customer*</h4>
           <p>I couldn’t have asked for a better experience. I will definitely be coming back. Thank you for meeting my needs so quickly!</p>
         </div>
       </div>
      </div>
       <style jsx>{headingDarken}</style>
       <style jsx>{paragraphDarken}</style>
       <style jsx>{h4}</style>
       <style jsx>{`
         .testimonial{
            position: relative;
            background: rgba(17, 111, 74);
            padding: 1rem 0;
         }
         .container{
            
             padding: 2rem 0 4rem;
             background-image:url(../../static/real-pipo.png);
             background-repeat: no-repeat;
             background-position :center;
             background-size: contain;
        }
        .overlay::before{
            position: absolute;
            content: '';
            width: 100%;
            height: 100%;
            background: rgba(17, 111, 74, 0.8);
            top:0;
            z-index: 0;

        }
           h3, h4, p{
            position: relative;
            z-index: 4;
           }
            h3{
                text-align:center;
                margin-bottom: 1rem;
                color: #fff;
             
            }
            h4{
                
                color: rgba(255, 255, 255, 0.788235294117647);
               
            }
            p{
                color:rgba(255, 255, 255, 0.788235294117647);
            }
       `}</style>
    </div>
)