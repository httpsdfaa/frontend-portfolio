import React from "react";
import './Skills.css';

import html5Img from '../../assets/img/html-icon.png';
import css3Img from '../../assets/img/css3-icon.png';
import jsImg from '../../assets/img/js-icon.png';
import reactImg from '../../assets/img/react-icon.png';
import tailwindServiceImg from '../../assets/img/service-icon.png';
import nodejsImg from '../../assets/img/nodejs-icon.png';
import mysqlImg from '../../assets/img/mysql-icon.png';
import pythonImg from '../../assets/img/python.png';

import sqlImg from '../../assets/img/sql.png';
import scrapyImg from '../../assets/img/scrapy.png';
import scikitImg from '../../assets/img/scikit.png';
import rImg from '../../assets/img/r.png';
import pandasImg from '../../assets/img/pandas.png';
import numpyImg from '../../assets/img/numpy.png';


export default props =>
    <section className="skills" id="skills">
        <h1>Skills</h1>
        <div className="frontend">
            <h3>FRONTEND</h3>
            <ul>
                <div className="div-li-icon">
                    <img src={html5Img} alt="html5" />
                    <li>HTML5</li>
                </div>
                <div className="div-li-icon">
                    <img src={css3Img} alt="css" />
                    <li>CSS3</li>
                </div>
                <div className="div-li-icon">
                    <img src={jsImg} alt="javascript" />
                    <li>JAVASCRIPT</li>
                </div>
                <div className="div-li-icon">
                    <img src={reactImg} alt="react" />
                    <li>REACT</li>
                </div>
                <div className="div-li-icon">
                    <img src={tailwindServiceImg} alt="tailwindcss" />
                    <li>TAILWIND CSS</li>
                </div>
            </ul>
        </div>
        <div className="backend">
            <h3>BACKEND</h3>
            <ul>
                <div className="div-li-icon">
                    <img src={nodejsImg} alt="nodejs" />
                    <li>NODE.JS COM EXPRESS</li>
                </div>
                <div className="div-li-icon">
                    <img src={pythonImg} alt="python" />
                    <li>PYTHON</li>
                </div>
                <div className="div-li-icon">
                    <img src={mysqlImg} alt="mysql" />
                    <li>MYSQL DATABASE <i>{`( Banco de dados )`}</i></li>
                </div>
            </ul>
        </div>
        <div className="data-analysis">
            <h3>Ciência de dados</h3>
            <ul>
                <div className="div-li-icon">
                    <img src={pythonImg} alt="python" />
                    <li>PYTHON</li>
                </div>
                <div className="div-li-icon">
                    <img src={rImg} alt="r" />
                    <li>LINGUAGEM R</li>
                </div>
                <div className="div-li-icon">
                    <img src={sqlImg} alt="sql" />
                    <li>SQL</li>
                </div>
                <div className="div-li-icon">
                    <img src={scikitImg} alt="scikitlearn" />
                    <li>SCIKIT LEARN</li>
                </div>
                <div className="div-li-icon">
                    <img src={pandasImg} alt="pandas" />
                    <li>PANDAS</li>
                </div>
                <div className="div-li-icon">
                    <img src={numpyImg} alt="numpy" />
                    <li>NUMPY</li>
                </div><div className="div-li-icon">
                    <img src={scrapyImg} alt="scrapy" />
                    <li>SCRAPY</li>
                </div>
            </ul>
        </div>
    </section>