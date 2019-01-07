import React from 'react';
import Hero from '../src/components/Hero';
import Direction from '../src/components/Direction';
import Mission from '../src/components/Mission';
import Vision from '../src/components/Vision';
import CallToAction from '../src/components/CallToAction';
import Workshop from '../src/components/Workshop';
import Partner from '../src/components/Partner';
import Social from '../src/components/Social';
import CoverService from '../src/components/CoverService';

export default () => (
  <div>
    <Hero/>
    <Direction url="#mission"/>
    <Mission/>
    <Vision/>
    <CallToAction/>
    <Workshop/>
    <Partner/>
    <Social/>
    <CoverService/>
  </div>
);

