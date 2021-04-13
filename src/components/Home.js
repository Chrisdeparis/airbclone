import React from 'react'
import Header  from "./Header";
import Logement from "./Logement";
import Localisation from "./Localisation";
import ChezVous from './ChezVous'
import Login from './Login'
import Hote from './Hote';

function Home() {
    return (
        <div className="Home">
            <Logement />
            <Localisation />
            <ChezVous />
            <Hote />
            {/*<Login />*/}
        </div>
    )
}

export default Home
