
import { paragraphDarken, headingDarken } from '../assets/theme';
const workshopActivities = [
    {
        title: 'Beautiful workshop',
        description: 'We have a good place for practical cases such as automation and software developments (Programming).',
        image: 'workshop1.svg'
    },
    {
        title: 'Automation',
        description: 'need description',
        image: 'workshop2.svg'
    },
    {
        title: 'Working on computer displays',
        description: 'The huge task was to find the best solution to fix display issues that have been arisen on a daily bases of computer usage.',
        image: 'workshop3.svg'
    },
    {
        title: 'Mobile phone lab',
        description: 'We have been working on fixing smartphone issues like displays, and internal components.',
        image: 'workshop4.svg'
    }
];

export default () => {
    
  return  (
    <section className="workshop">
        <div className="row container">
            <div className="col s12"><h3 className="workshop__heading center-align">Work  shop</h3></div>

            { workshopActivities.map(({title, description, image }) => (
                <div className="col s12 m6" key={title}>
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                                <img src={`../static/${image}`} alt={ image } className="responsive-img"/>
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">{ title } <i className="material-icons right">more_vert</i></span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4"> { title } <i className="material-icons right">close</i></span>
                            <p>{ description }</p>
                        </div>
                    </div>
                </div>
            ))}

        </div>
        <style jsx>{headingDarken}</style>
        <style jsx>{paragraphDarken}</style>
        <style jsx>{`
          .card{
            box-shadow: 0 0 rgb(204, 204, 204);
          }
          .workshop{
              background-image: url(../../static/show-off.svg);
              background-size: contain;
              background-attachment: fixed;
          }
          h3{
              margin-bottom: 3rem;
          }
          img{
              width: 30%;
              height: 30%;
          }
        `}</style>
    </section>
    );
}