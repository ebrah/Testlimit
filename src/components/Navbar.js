import React, { Component } from 'react';
import $ from 'jquery';
import Link from 'next/link';
import { body } from '../assets/theme';

export default class Navbar extends Component{
   constructor(props){
     super(props);
     this.props = props;
   }

   componentDidMount = () => {
      if(typeof window !== 'undefined'){
        window.$ = $;
        window.jQuery = $;
        require('materialize-css');
      }

      $('.sidenav').sidenav();

   }

   render(){
      return(
        <div className="navbar-fixed">
          <nav className="nav-wrapper white">
            <div className="container">
               <Link href="#">
                  <a  className="brand-logo"> <img src="../static/testlimit.png" alt="testlimit logo" className="testlimit-logo"/></a>
               </Link>
                
                <a href="" className="sidenav-trigger teal-text" data-target="mobile-menu">
                    <i className="material-icons">menu</i>
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li> 
                        <Link href="/">
                           <a  className="teal-text">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a  className="teal-text">About us</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services">
                          <a  className="teal-text">Services</a>
                        </Link>
                    </li>
                    <li>
                      <Link href="/products">
                        <a  className="teal-text">Products</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                         <a  className="teal-text">Contacts</a>
                      </Link>
                    </li>
                </ul>
                <ul className="sidenav grey lighten-3" id="mobile-menu">
                    <li> 
                        <Link href="/">
                        <a  className="teal-text">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a  className="teal-text">About us</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services">
                        <a  className="teal-text">Services</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/products">
                            <a  className="teal-text">Products</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a  className="teal-text">Contacts</a>
                        </Link>
                    </li>
                </ul>
            </div>
         </nav>
            <style jsx>{`
                .testlimit-logo{
                    max-width: 11rem;
                }
                @media(max-width: 40rem){
                    .testlimit-logo{
                        max-width: 9rem;
                    }
                }
                .sidenav{
                    
                    z-index: 999 !important;
                }
            `}</style>
            <style global jsx>{body}</style>
        </div>  
    );
   }

}
