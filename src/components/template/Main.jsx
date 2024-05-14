import React from 'react';
import './Main.css';
import IntroBg from './IntroBg';
import Cards from './Cards';
import Skills from './Skills';
import Quotes from './Quotes';
import Certificates from './Certificates';

export default function Main() {
    return (
        <main className="content">
            <IntroBg />
            <Quotes />
            <Cards />
            <Certificates />
            <Skills />
        </main>
    )
}