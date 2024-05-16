import './Quotes.css'

import LinkedInBadge from './LinkedinSelo'

export default props =>
    <div className='qt-div'>
        <section className='qt' maxWidth='true'>
            <h2 className='quote-title'>Albert Einstein</h2>
            <hr></hr>
            <aside>
                <blockquote>
                    <p className='msg'>
                        A definição de insanidade é fazer a mesma coisa repetidamente e esperar resultados diferentes
                    </p>
                </blockquote>
            </aside>
            <hr></hr>
        </section>
        <LinkedInBadge maxWidth='true'/>
    </div>