import './Quotes.css'

import LinkedInBadge from './LinkedinSelo'

export default props =>
    <div className='qt-div'>
        <section className='qt' maxWidth='true'>
            <h2 className='quote-title'>Sherlock Holmes</h2>
            <hr></hr>
            <aside>
                <blockquote>
                    <p className='msg'>
                        Dados! Dados! Preciso de dados! Não posso fazer tijolos sem barro!.
                    </p>
                </blockquote>
            </aside>
            <hr></hr>
        </section>
        <LinkedInBadge maxWidth='true'/>
    </div>
