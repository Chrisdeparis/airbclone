import React from 'react'
import './responsive.css';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ContactsIcon from '@material-ui/icons/Contacts';

function FooterMobile() {
    return (
        <div className="footer__mobile">
            <div className="footer__explorer">
                <a href="http:/"><SearchIcon /></a>
                <p><a href="http:/">Explorer</a></p>
            </div> 
            <div className="footer__favoris">
                <a href="http:/"><FavoriteBorderIcon /> </a>
                <p><a href="http:/">Favoris</a></p>
            </div>
            <div className="footer__connect">
                <ContactsIcon />
                <p>Connexion</p>
            </div>
        </div>
    )
}

export default FooterMobile
