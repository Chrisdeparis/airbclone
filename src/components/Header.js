import React from 'react'
import './Header.css';



import OuAllezVous from "./OuAllezVous";
import HeaderLogo from './HeaderLogo';
import HeaderCenter from './HeaderCenter';
import RechercheHeb from './RechercheHeb';
import DevenezHote from './DevenezHote';
import Langues from './Langues';
import Connection from './Connection';



function Header() {

    return (
        <div className="header">
            <div className="logo__nav">
                <HeaderLogo />
                <HeaderCenter />
                <DevenezHote />
                <Langues />
                <Connection />
            </div>
            <RechercheHeb />
            <OuAllezVous />
        </div>
    )
}

export default Header
