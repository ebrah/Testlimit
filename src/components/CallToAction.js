import Button from './Button';
import {headingDarken} from '../assets/theme';


export default () => (
    <section className="container cta__container">
        <div className="row">
            <div className="col s12">
                <div className="card ">
                <div className="card-content">
                    <h3 className="card-content__cta center-align">What Are You Waiting For?</h3>
                    <h5 className="card-content__cta--text center-align">effective project consultation</h5>
                    <Button/>
                </div>
                </div>
            </div>
        </div>

        <style jsx>{headingDarken}</style>
        <style jsx>{`
            h3{
                font-size: 2rem !important;
                letter-spacing: 2px !important;
                margin-bottom: 2rem;
            }
            @media(max-width: 40rem){
                .card-content{
                    padding: 3rem !important;
                }
            }
            .card-content{
                padding: 7rem;
            }
            .cta__container{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 80vh;
            }
            .card-content__cta{
                letter-spacing: var(--header-sp);
            }
            .card-content__cta--text{
                letter-spacing: 1px;
                margin-bottom: 1.5rem;
            }
        `}</style>
    </section>
)