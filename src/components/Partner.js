import { headingDarken }  from '../assets/theme';

export default () => (
    <section className="partners container main">
        <h3 className=" partner-title"> Our Trusted partners</h3>
        <div className="container">
            <div className="p-circle"> <img src="../static/Bariki.svg" alt="bariki_pharmacy" class="responsive-img"/> </div> 
            <div className="p-circle"> <img src="../static/Tigo.svg" alt="tigo_bima" class="responsive-img"/> </div>
            <div className="p-circle"> <img src="../static/Halotel.svg" alt="Halotel" class="responsive-img"/> </div> 
        </div>
        <style jsx> {headingDarken} </style>
        <style jsx>{`
           .partner-title{
            
               align-self: center;
               margin-left: 1rem;
               
           }
           .p-circle{
              margin: 1rem;
              flex: 1 1 4rem;

           }
           .partners{
               padding:4rem 0 7rem;
           }
           .container{
               display: flex;
           }

           @media(max-width: 40rem){
               .main{ 
                   flex-direction: column;
                   text-align:center;
                   margin-bottom: 1rem;
             }
           }
           
        `}</style>
    </section>
);