import './Quotes.css'

import LinkedInBadge from './LinkedinSelo'

export default props =>
    <div className='qt-div'>
        <section className='qt' maxWidth='true'>
            <h2 className='quote-title'>Sean Rad</h2>
            <hr></hr>
            <aside>
                <blockquote>
                    <p className='msg'>
                        Os dados batem as emoções.
                    </p>
                </blockquote>
            </aside>
            <hr></hr>
        </section>
        <LinkedInBadge maxWidth='true'/>
    </div>
