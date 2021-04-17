import React from 'react'
import Adresse from "./Adresse"
import Grid from './Grid';
import Recherche from './Recherche'

function RechercheHeb() {
    return (
        <div className="recherche">
            <h1>Find hébergements in France on Airbnb</h1>
            <p>Découvrez des chambres privées ou des logements entiers, parfaitement adaptés à tout type de voyage.</p>
            <Adresse />
            <Grid />
            <Recherche />
        </div>
    )
}

export default RechercheHeb
