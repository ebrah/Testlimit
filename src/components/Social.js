import { useEffect } from 'react';

export default () => {
   useEffect(() => {
       $('.parallax').parallax();
   })
  return (
    <section className="social parallax-container">
        <div className="parallax"><img src="../static/prmg_session.svg"/></div>
        <div className="social-content container center-align">
            <h3 className="white-text text-lighten-2">find us</h3>
            <p className="grey-text text-lighten-3">Connet with us</p>
            <div className="row container">
                <div className="col s4"> <a href="" className="teal-text text-lighten-4"><i className="fab fa-facebook fa-2x"></i> </a> </div>
                <div className="col s4"> <a href="" className="teal-text text-lighten-4"><i className="fab fa-twitter fa-2x"></i> </a> </div>
                <div className="col s4"> <a href="" className="teal-text text-lighten-4"><i className="fab fa-instagram fa-2x"></i> </a></div>
            </div>
        </div>
        <style jsx>{`
            .social{
                display: flex;
                background-color: rgba(77, 182, 172, 0.86);
            }
            .social-content{
                margin:auto;
            }
            .social-content > * {
                margin-bottom: 2rem;
            }
        `}</style>
    </section>
);
}