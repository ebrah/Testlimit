
import {headingDarken, h4}  from '../assets/theme';

export default() => (
    <div className="container">
      <h3> Services we Provice </h3>
      <div className="row">
        <div className="col s12 m4">
          <div className="card">
            <h4>Computer Services</h4>
            <ul>
                <li>Power Supply Problem.</li>
                <li>Display and VGA replacement.</li>
                <li>Bluetooth Installation (on old laptops).</li>
                <li>Camera Installation (on old laptops).</li>
                <li>Battery Replacement | Keyboard & Mouse Repair.</li>
            </ul>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card">
            <h4>Project consultation</h4>
            <ul>
                <li>Networking (Design & Installation).</li>
                <li>Electronics (Hardware Troubleshooting).</li>
                <li>Developing Board [PIC, Arduino, Rasberry Pi, Design etc.]</li>
                <li>Programming Web Design, Database Management & Blogs.</li>
            </ul>
          </div>
        </div>
        <div className="col s12 m4">

          <div className="card">
            <h4>Mobile phones services</h4>
            <ul>
                <li>Power Supply Problem.</li>
                <li>Touch and Display Replacement.</li>
                <li>Charging Problem.</li>
                <li>Motherboard Faults.</li>
                <li>Unlocks Network (AT&T, T-Mobile, Repair)</li>
            </ul>
          </div>
        </div>

      </div>
      <style jsx>{headingDarken}</style>
      <style jsx>{h4}</style>
      <style jsx>{`
        .container{
            padding: 5vh 0;
        }
        h3{
            text-align: center;
        }
        .card{
            background: #ECEEEE;
            padding: 5vh 3vw;
            box-shadow: 0 0;
            height: 60vh;
            position: relative;
            margin-top: 10vh;
        }
        .card::before{
            position: absolute;
            content: '';
            background: #C4C4C4;
            width: 5rem;
            height: 5rem;
            left: 35%;
            border-radius: 50%;
            top: -10%;
            box-shadow: 0 0 4px;
         } 
      `}</style>
    </div>
)