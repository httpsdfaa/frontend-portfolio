import React, { useState } from 'react';
import './Header.css';
import { List, Github, Linkedin } from 'react-bootstrap-icons';

export default function Header() {


    const [toggle, setToggle] = useState(true ? window.innerWidth >= 777: false);

    const onclick = () => {
        if (!toggle)
            setToggle(true);
        else
            setToggle(false);
    }

    window.addEventListener("resize", () => {
        if(window.innerWidth <= 777)
            setToggle(false);
        else
            setToggle(true);
    })

    return (
        <header className="header">
            <section className="logo">
                <span className="logo">Deivison</span>
            </section>
            <section className="menu" onClick={onclick}><List size={32} /></section>

            {
                toggle ?

                    <nav className="nav">
                        <ul>
                            <a href="#portfolio" rel="noreferrer">
                                <li>Portfólio</li>
                            </a>
                            <a href="#certificate" rel="noreferrer">
                                <li>Certificado</li>
                            </a>
                            <a href="#skills" rel="noreferrer">
                                <li>Skills</li>
                            </a>
                            <a href="#contact" rel="noreferrer">
                                <li>Contato</li>
                            </a>
                        </ul>
                    </nav>
                    : null
            }

            <section className="icons-social">
                <a href="https://github.com/httpsdfaa" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                <a href="https://br.linkedin.com/in/deivisonfernandes" target="_blank" rel="noopener noreferrer">  <Linkedin size={20} /></a>
            </section>
        </header>
    )
}