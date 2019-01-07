import React, { Fragment } from 'react';
import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

export default (props) => (
    <Fragment>
      <Head>
        <title> Testlimit web</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"/>

        <link href="../node_modules/pure-react-carousel/dist/react-carousel.es.css" rel="stylesheet"/>
        <link rel="stylesheet" href="../node_modules/aos/dist/aos.css"/>
        <link rel="stylesheet" href="../node_modules/animate.css"/>
    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      
     </Head>
     <Navbar/>
      { props.children }
     <Footer/>
    </Fragment>
);