import React from 'react'
import Header  from "./Header";
import Logement from "./Logement";
import Localisation from "./Localisation";

function Home() {
    return (
        <div className="Home">
            <Header />
            <Logement />
            <Localisation />
        </div>
    )
}

export default Home
