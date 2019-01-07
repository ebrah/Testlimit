
import Link from 'next/link';

export default () => (
 <div className="btn-cta">
    <Link href="/contact">
       <button className="btn waves-effect waves-light btn-large" type="submit" name="action"> Contact us </button>
    </Link>
    <style jsx>{`
        .btn-cta{
            display: flex;
            justify-content:center;
        }
        .btn{
            border-radius: 5%;
            align-self:center;
        
        }
    `}</style>
 </div>
);