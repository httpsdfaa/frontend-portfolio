import React from "react";
import './IntroBg.css';
//import svgBg from '../../assets/svg-bg.svg'
import CircuitSvg from '../../assets/Circuit-svg'

export default function IntroBg() {
    return (
        <section className="intro" slide="loadTop">
            <div className="intro">
                <h2>Olá, seja bem vindo ao meu portfólio</h2>
                <h1>Eu sou, <br />Deivison Fernandes</h1>
                <p>Foco em Análise de dados e Machine learning. Explore e descubra como <br />minha jornada de estudos
                    está moldando o meu entendimento
                </p>
            </div>
            <div className="svg-bg">
                <CircuitSvg />
                {/*<img src={svgBg} alt="background-svg" />*/}
            </div>
        </section>
    )
}
