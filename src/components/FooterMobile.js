import React from 'react'
import './responsive.css';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ContactsIcon from '@material-ui/icons/Contacts';

function FooterMobile() {
    return (
        <div className="footer__mobile">
            <div className="footer__explorer">
                <SearchIcon />
                <p>Explorer</p>
            </div> 
            <div className="footer__favoris">
                <FavoriteBorderIcon /> 
                <p>Favoris</p>
            </div>
            <div className="footer__connect">
                <ContactsIcon />
                <p>Connexion</p>
            </div>
        </div>
    )
}

export default FooterMobile
