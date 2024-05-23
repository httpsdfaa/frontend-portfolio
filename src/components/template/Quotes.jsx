import './Quotes.css'

import LinkedInBadge from './LinkedinSelo'

export default props =>
    <div className='qt-div'>
        <section className='qt' maxWidth='true'>
            <h2 className='quote-title'>Alan Turing</h2>
            <hr></hr>
            <aside>
                <blockquote>
                    <p className='msg'>
                        Those who can imagine anything, can create the impossible.
                    </p>
                </blockquote>
            </aside>
            <hr></hr>
        </section>
        <LinkedInBadge maxWidth='true'/>
    </div>