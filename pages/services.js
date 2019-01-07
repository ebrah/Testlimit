import Layout from './Layout';
import ServiceHeader from '../src/components/ServiceHeader';
import ProjectCall from '../src/components/projectCall';
import CoreServices from '../src/components/coreSevices';
export default () => (
   <Layout>
    <ServiceHeader/>
    <ProjectCall/>
    <CoreServices/>
   </Layout>
);