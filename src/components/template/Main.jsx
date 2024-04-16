import React from 'react';
import './Main.css';
import IntroBg from './IntroBg';
import Cards from './Cards';
import Skills from './Skills';
//import Quotes from './Quotes';

export default props =>
    <main className="content">
        <IntroBg />
        <Cards />
        <Skills />
    </main>