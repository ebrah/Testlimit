
import { headingDarken, paragraphDarken } from '../assets/theme';
export default () => (
    <div className="container" id="about">
       <div className="row">
         <div className="col s12 m4">
           <h3>About <br/> us</h3>
         </div>
         <div className="col s12 m8">
           <p>Testlimit, it is our registered name, it is umbrella body of many sub-divisions within our company. computer literacy, computer technologies, Youth development, Creative, Stationery supply, Printing and bookbinding, all these divisions carry the name "Talent" as a title, and then the division after the name. This will result in MERITS as our registered name and trade names will be according to our division. All these division will carry the ultimate mission of using the power of technological innovation in uplifting the standard of education and improving the lives of our rural communities.</p>
         </div>
        </div>
        <div>
          <div className="row">
            <div className="col s2"></div>
            <div className="col s10">
              <p className="moto"> <span> Our Moto </span> is "looking forward to the future" as the name indicate. </p>
            </div>
          </div>
        </div>
       <style jsx>{ headingDarken }</style>
       <style jsx>{ paragraphDarken }</style>
        <style jsx>{`
          span{
             color: #57615C !important;
          }
          .container{
              padding: 10vh 0;
          }
          .moto{
          
            padding: 4vh;  
          }
        `}</style>
    </div>
);