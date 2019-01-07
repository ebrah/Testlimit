
import {headingDarken, h4} from '../assets/theme';

export default() => (
    <div className="container">
     <h3>Core Services</h3>
     <div className="b-row">

     <div className="b-container">
       <div className="img-container">
         <img src="../../static/about_us.svg"  className="responsive-img img-left"/>
       </div>
       <div className="card card-left">
          <h4>Core Business</h4>
          <ul>
            <li>Business (Marketing & Advertisement)</li>
            <li>services & Maintanance (Repair hardware, Software)</li>
            <li>Innovation & creativity (Home automation system etc.)</li>
          </ul>
       </div>
     </div>

     <div className="b-container">
       <div className="img-container img2">
         <img src="../../static/workshop3.svg" className="responsive-img img-right"/>
       </div>
       <div className="card card-right">
          <h4>Innovation & Creativity designing</h4>
          <ul>
            <li>Home automation system</li>
            <li>Gate system</li>
            <li>Dropnes</li>
            <li>Robotics innovation</li>
            <li>Training (ICT TOTAL)</li>
            <li>Software development</li>
          </ul>
       </div>
     </div>
     </div>

     <div className="b-row second-row">

     <div className="b-container">
       <div className="img-container c2">
         <img src="../../static/talent-img.svg"  className="responsive-img img-right img-next"/>
       </div>
       <div className="card card-right">
          <h4>Services and Maintanace</h4>
          <ul>
            <li>Repair of hardware devices</li>
            <li>Software development</li>
            <li>Networking</li>
            <li>CCTV camera</li>
          </ul>
       </div>
     </div>

     <div className="b-container b3">
       <div className="img-container img2 c1">
         <img src="../../static/workshop2.svg" className="responsive-img img-left img-next"/>
       </div>
       <div className="card card-left">
          <h4>Business, Marketing and advertisment</h4>
          <ul>
            <li>Selling laptops</li>
            <li>Stationary</li>
            <li>ID Cards</li>
            <li>Phones</li>
            <li>Electronics Components</li>
          </ul>
       </div>
     </div>

    </div>

     <style jsx>{headingDarken}</style>
     <style jsx>{h4}</style>
     
     <style jsx>{`
         .container{
           padding: 15vh 0;
         }
         .b-row{
           display: flex;
         }
         .second-row{
          margin-top: 40px ;
         }
         .b-container{
           display: flex;;
          
         }
  
         .card{
           padding:2rem 3rem;
           flex: 1 1 100%;
           border-radius: 10px;
           margin:0;
         }

         .card-left{
           margin-right: 20px;
         }
         .card-right{
           margin-left: 20px;
         }

         .img-container{
           flex: 0 1 25rem;
           padding:0;
           align-self:center;
         }
         img{
           height: 57vh;
           object-fit: cover;
           
         }
         .img-next{
          height: 53vh;
         }
        .c2, .img2{
          order: 1;
         
        }
        .img-left{
          border-radius: 5px 0 0 5px;
        }
        .img-right{
          border-radius: 0 5px 5px 0;
        }

        h3{
          margin-bottom: 10vh;
        }
        .c1, .b3{
          order: -1;
        }

        @media(max-width: 40rem){
          .b-row{
            flex-wrap: wrap; 
          }
          .b-container{
            margin-top: 10vh;
          }
          .card-right{
            margin-left: 0 ;
          }
          .card-left{
            margin-left: 0 ;
          }
        }

     `}</style>
    </div>
);