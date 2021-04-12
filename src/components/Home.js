import React from 'react'
import Header  from "./Header";
import Logement from "./Logement";
import Localisation from "./Localisation";
import ChezVous from './ChezVous'

function Home() {
    return (
        <div className="Home">
            <Header />
            <Logement />
            <Localisation />
            <ChezVous />
        </div>
    )
}

export default Home
