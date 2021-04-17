import React, {useState, useEffect } from 'react'
import './responsive.css';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ContactsIcon from '@material-ui/icons/Contacts';



function FooterMobile() {
    const [footer, setFooter] = useState(false);   

    const hideFooter = () => {
        //quand le scroll est en fin de page
        let limit = document.body.offsetHeight - window.innerHeight;
        if(window.scrollY < limit){            
            const ft = document.getElementById('footer');
            ft.style.display='';   
        } else { 
            const ft = document.getElementById('footer');
            ft.style.display='none';
            ft.style.transition='ease 0.3s';
        }
       
    };

    useEffect(() => {
        hideFooter();
        
    });
    
    const hideFooterMobile = () => {
        let limit = document.body.offsetHeight - window.innerHeight;
        if(window.scrollY < limit) {
            setFooter(true);
        } else {
            setFooter(false);
        }

    };

    window.addEventListener('scroll', hideFooterMobile);


    return (
        <div className={hideFooter ? 'footer__mobile' : ''} id="footer">
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
};

export default FooterMobile;
