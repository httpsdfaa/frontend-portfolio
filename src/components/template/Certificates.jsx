import './Cerfificates.css';

import explorationCert from '../../assets/img/coursera-exp.png'
import dataCert from '../../assets/img/coursera-data.png'
import qtCert from '../../assets/img/coursera-qt.png'
import rCert from '../../assets/img/coursera-r.png'
import jsCert from '../../assets/img/javascript.png'
import emBreve1 from '../../assets/img/embreve1.png'
import emBreve2 from '../../assets/img/embreve2.png'
import pdCert from '../../assets/img/data-processing.png'
import answerCert from '../../assets/img/answer-questions.png'


export default function Certificates() {
    return (
        <>
            <h1 className="title-ct" id="certificates">Certificados</h1>
            <div className="ct">
                <section className="card-ct">
                    <a href="https://www.coursera.org/account/accomplishments/verify/6JJ5PMK6D4XP">
                        <img src={answerCert} alt="Certificado Responder Perguntas" />
                    </a>
                </section>
                <section className="card-ct">
                    <a href="https://www.coursera.org/account/accomplishments/verify/97SPLWXG92AH">
                        <img src={pdCert} alt="Certificado Processar Dados" />
                    </a>
                </section>
                <section className="card-ct">
                    <a href="https://www.coursera.org/account/accomplishments/verify/VHMBJV7JB5QZ">
                        <img src={explorationCert} alt="Certificado Exploração" />
                    </a>
                </section>
                <section className="card-ct">
                    <a href="https://www.coursera.org/account/accomplishments/certificate/MXDQYAR4MNVU">
                        <img src={dataCert} alt="Certificado Data" />
                    </a>
                </section>
                <section className="card-ct">
                    <a href="https://www.coursera.org/account/accomplishments/verify/3B68YCJNMRRB">
                        <img src={qtCert} alt="Certificado " />
                    </a>
                </section>
                <section className="card-ct">
                    <a href="https://www.coursera.org/account/accomplishments/certificate/KLYFCT59WJA9">
                        <img src={rCert} alt="Certificado " />
                    </a>
                </section>
                <section className="card-ct">
                    <a href="https://www.udemy.com/certificate/UC-484c7dc4-20d1-41ee-9c0e-e04766c1d2d8/">
                        <img src={jsCert} alt="Certificado " />
                    </a>
                </section>
                <section className="card-ct">
                    <a href="_">
                        <img src={emBreve1} alt="Certificado Em breve" heightEdit="heightEdit"/>
                    </a>
                </section>
                <section className="card-ct">
                    <a href="_">
                        <img src={emBreve2} alt="Certificado Em breve"/>
                    </a>
                </section>

            </div>
        </>
    )
}
