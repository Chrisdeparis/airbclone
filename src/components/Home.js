import React from 'react'
import Header  from "./Header";
import Logement from "./Logement";
import Localisation from "./Localisation";
import ChezVous from './ChezVous'
// import Login from './Login'
import Hote from './Hote';
import Experience from './Experience'
import Footer from './Footer'
import FooterMobile from './FooterMobile';
import AlertCovid from './AlertCovid';

function Home() {
    return (
        <div className="Home">
            <AlertCovid />
            <Logement />
            <Localisation />
            <ChezVous />
            <Hote />
            {/*<Login />*/}
            <Experience />
            <Footer />
            <FooterMobile />
        </div>
    )
}

export default Home
