import React, {useState, useEffect } from 'react'
import './responsive.css';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ContactsIcon from '@material-ui/icons/Contacts';



function FooterMobile() {
    const [footer, setFooter] = useState(false);
    

    const hideFooter = () => {
        //quand le scroll est en fin de page
        //le footer disparait de l'écran.
        const footer = document.getElementById('footer');
    };


    return (
        <div className="footer__mobile" id="footer">
            <div className="footer__explorer">
                <a href="http:/"><SearchIcon /></a>
                <p><a href="http:/">Explorer</a></p>
            </div> 
            <div className="footer__favoris">
                <a href="http:/"><FavoriteBorderIcon /></a>
                <p><a href="http:/">Favoris</a></p>
            </div>
            <div className="footer__connect">
            <a href="http:/"><ContactsIcon /></a>
                <p><a href="http:/">Connexion</a></p>
            </div>
        </div>
    )
}

export default FooterMobile
