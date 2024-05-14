import React from "react";
import './Cards.css';

import listaImg from '../../assets/img/lista.png'
import portfoliov2Img from '../../assets/img/portfolio-v2.png';
import calculoImcImg from '../../assets/img/calculoImc.png';
import cpfImg from '../../assets/img/cpf-documento.jpg'

import mysqlIcon from '../../assets/img/mysql-icon.png';
import nodejsIcon from '../../assets/img/nodejs-icon.png';
import reactIcon from '../../assets/img/react-icon.png';
import pythonImg from '../../assets/img/python.png';


export default function Cards() {
    return (
        <section className="cards-body" id="portfolio">
             <a href="https://github.com/httpsdfaa/validator-generator-cpf" target="_blank">
                <section className="card" slide="up" >
                    <img src={cpfImg} alt="card" cardimg="cpfWith" />
                    <h2>Script para validar e gerar CPFs com Python</h2>
                    <span>GERADOR E VALIDADOR DE CPFs EM LINHA DE COMANDO INTERATIVO PARA FINS ACADÊMICOS
                        O ALGORITMO PERMITE:</span>
                    <br />
                    <ul>
                        <li>Gerar CPF</li>
                        <li>Validar CPF</li>
                    </ul>
                    <br />
                    <span>IMPORTANTE: Os CPFs utilizados para teste foram encontrados no site 4Devs (uma ferramenta online para desenvolvedores). Não me responsabilizo pelo uso inadequado de qualquer informação utilizada aqui.</span>
                    <br />
                    <ul>
                        <div className="div-li-icon">
                            <img src={pythonImg} alt="python" />
                            <li>Python</li>
                        </div>
                    </ul>
                </section>
            </a>


            <a href="https://github.com/httpsdfaa/lista-python" target="_blank">
                <section className="card" slide="up" >
                    <img src={listaImg} alt="card" cardimg="listaWith" />
                    <h2>Lista de itens sem módulos adicionais em Python</h2>
                    <a href="https://github.com/httpsdfaa/lista-python" target="_blank">Código</a>
                    <br />
                    <br />
                    <span>O ALGORITMO PERMITE:</span>
                    <br />
                    <ul>
                        <li>Adicionar</li>
                        <li>Deleter</li>
                        <li>Listar itens adicionais</li>
                    </ul>
                    <br />
                    <ul>
                        <div className="div-li-icon">
                            <img src={pythonImg} alt="python" />
                            <li>Python</li>
                        </div>
                    </ul>
                </section>
            </a>
            <section className="card" slide="up" >
                <img src={portfoliov2Img} alt="card" cardimg="portfolioWidth" />
                <h2>Portfólio pessoal</h2>
                <span>Desenvolvimento finalizado</span><br />
                <ul>
                    <div className="div-li-icon">
                        <img src={reactIcon} alt="React" />
                        <li>REACT</li>
                    </div>
                    <div className="div-li-icon">
                        <img src={nodejsIcon} alt="NodeJS" />
                        <li>NODEJS</li>
                    </div>
                    <div className="div-li-icon">
                        <img src={mysqlIcon} alt="MySql" />
                        <li>MYSQL</li>
                    </div>
                </ul>
            </section>
            <a href="https://calculation-bmi-vercel-a61vsrw0e-fernandedfa.vercel.app/" target="_blank">
            <section className="card" slide="up" >
                <img src={calculoImcImg} alt="card" cardimg="calculoImcWidth" />
                <h2>Cálculo IMC</h2>
                <a href="https://github.com/httpsdfaa/calculation-bmi">Código</a>
                <br />
                <span>Desenvolvimento finalizado</span><br />
                <ul>
                    <div className="div-li-icon">
                        <img src={reactIcon} alt="React" />
                        <li>REACT</li>
                    </div>
                </ul>
            </section>
            </a>
        </section>)
}