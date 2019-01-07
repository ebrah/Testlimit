
import Layout from './Layout';
import AboutHero from '../src/components/AboutHero';
import Direction from '../src/components/Direction';
import AboutContent from '../src/components/AboutContent';
import Talent from '../src/components/Talent';
import Team from '../src/components/Team';

export default () => (
   <Layout>
     <AboutHero/>
     <Direction url="#about"/>
     <AboutContent/>
     <Talent/>
     <Team/>
   </Layout>
);