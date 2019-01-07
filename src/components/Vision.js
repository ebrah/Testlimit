import {useEffect} from 'react';
import {headingDarken, paragraphDarken } from '../assets/theme';

export default () => {
    useEffect(()=> {
        $('.parallax').parallax();
    })
    return (
        <section className="vision parallax-container">
            <div className="parallax"><img src="../static/pc_open1.jpg" alt="" className="responsive-img"/></div>
            <div className="vision__content">
                <div className="container">
                    <h3>Our visition</h3>
                    <p>TESTLIMIT is looking forward to the future so our vision is to see every member of the community appreciate the power of ICT technologies, and be able to use the computer as an aid to improve their own lives. We intend embarking on education our current team to the highest level of education in order to be a local based successful.</p>
                    <p>To enable us to achieve this vision, we will work very closely with both rural and urban masses of the country, moreover, we intend partnering with established and upcoming ICT companies to provide our clients with total quality products.</p>
                </div>
            </div>
            <style jsx>{headingDarken}</style>
            <style jsx>{paragraphDarken}</style>
            <style jsx>{`
              .vision{
                background: rgba(17, 111, 74, 0.91);
                
                
              }
              .vision__content{
                 
                  height: 100%;
                  display: flex;
                  padding: 1rem;
              }
              .container{
                  align-self:center;
              }
              h3{
                 color: #fff;
                 margin-bottom: 2rem !important;
              }
              p{
                color: #ffffffe8;
              }
            `}</style>

        </section>
    );
}