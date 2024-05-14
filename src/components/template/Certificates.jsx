import './Cerfificates.css';

import explorationCert from '../../assets/img/coursera-exp.png'
import dataCert from '../../assets/img/coursera-data.png'
import qtCert from '../../assets/img/coursera-qt.png'
import rCert from '../../assets/img/coursera-r.png'
import jsCert from '../../assets/img/javascript.png'

export default function Certificates() {
    return (
        <>
            <h1 className="title-ct" id="certificates">Certificados</h1>
            <div className="ct">
                <section className="card-ct">
                    <a href="https://www.coursera.org/account/accomplishments/verify/VHMBJV7JB5QZ">
                        <img src={explorationCert} alt="Certificado " />
                    </a>
                </section>
                <section className="card-ct">
                    <a href="https://www.coursera.org/account/accomplishments/certificate/MXDQYAR4MNVU">
                        <img src={dataCert} alt="Certificado " />
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
            </div>
        </>
    )
}