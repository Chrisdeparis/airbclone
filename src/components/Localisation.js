import React from 'react'
import AppartGrid from './AppartGrid'

function Localisation() {
    return (
        <div className="localisation">
            <div>
            <a href="/" className="localisation__link">Airbnb</a> > <a className="localisation__link" href='/'>Logements</a> > France

            </div>
            <h2 className="localisation__title">What guests are saying about hébergements in France</h2>
            <p className="localisation__p">Plus de <strong>21 000 000 évaluations de voyageurs</strong>, avec une moyenne de <strong>4.7 étoiles sur 5</strong></p>
            <AppartGrid />
        </div>
    )
}

export default Localisation
