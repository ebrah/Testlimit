import Layout from './Layout';
import ProductShow from '../src/components/ProductShow';
import Direction from '../src/components/Direction';
import Products from '../src/components/products';
import Testimonial from '../src/components/Testimonial';

export default () => (
   <Layout>
    <ProductShow/>
    <Direction url="#products"/>
    <Products/>
    <Testimonial/>
   </Layout>
);