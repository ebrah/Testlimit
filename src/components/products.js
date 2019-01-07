
import { paragraphDarken, h4 } from '../assets/theme';
export default () => (
    <div className="container" id="products">
      <div className="row">
        <div className="col s12 m4">
          <img src="../../static/prmg_session.svg" className="responsive-img"/>
        </div>
        <div className="col s12 m6 offset-l1">
          <h4> CCTV Cameras</h4>
          <p> description</p>
        </div>
      </div>

      <div className="row">
      <div className="col s12 m4 push-m7">
        <img src="../../static/prmg_session.svg" className="responsive-img"/>
      </div>
      <div className="col s12 m6 offset-l1  pull-m5 right-align">
        <h4> Computer Motherboard </h4>
        <p> description</p>
      </div>
    </div>

      <div className="row">
        <div className="col s12 m4">
          <img src="../../static/prmg_session.svg" className="responsive-img"/>
        </div>
        <div className="col s12 m6 offset-l1">
          <h4> Flash and Mouse </h4>
          <p> description</p>
        </div>
      </div>

      <div className="row">
      <div className="col s12 m4 push-m7">
        <img src="../../static/prmg_session.svg" className="responsive-img"/>
      </div>
      <div className="col s12 m6 offset-l1  pull-m5 right-align">
        <h4> Electronics componets for project development</h4>
        <p> Timers, Resistors, Transitors, Diodes, Capacitors etc</p>
      </div>
    </div>
    <style jsx>{paragraphDarken}</style>
    <style jsx>{h4}</style>
    <style jsx>{`
       .container{
           padding: 4rem 0;
           background-image: url(../../static/show-off.svg);
           background-size: contain;
           background-repeat: no-repeat;
           background-position: center;
           background-attachment: fixed;
       }
       .row{
           padding: 2rem 0;
       }
       p{
           text-align: unset;
       }
    `}</style>

 </div>
);