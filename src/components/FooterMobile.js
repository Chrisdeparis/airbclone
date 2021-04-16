import React, {useState, useEffect } from 'react'
import './responsive.css';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ContactsIcon from '@material-ui/icons/Contacts';



function FooterMobile() {
    const [footer, setFooter] = useState(false);
    

    // const hideFooter = () => {
    //     let scrollTop=0;
    //     let lastScrollTop = 0;
        
    //     const footer = document.getElementById('footer');

    //     window.addEventListener("scroll", function() {
    //         let scrollTop = window.pageYOffset;
    //     })

    //     //  const EndPage = window.scrollY;
    //     //  console.log('scroll = ' + window.scrollY);
    //     //  if(window.scrollY < 80) {

    //     //     console.log('on cache le footer');
    //     //     console.log(scrollTop);
    //     //     setFooter(true)
    //     //     footer.style.bottom="-80px";

    //     // } else {
    //     //     footer.style.bottom="0";
    //     //     setFooter(false);
            
    //     //     console.log('on montre le footer');
    //     // }
    //     // lastScrollTop = scrollTop;
    // }

    useEffect(() => {
        // hideFooter();
    }, []);

    // window.addEventListener('scroll', hideFooter);  

    // const changeBackground = () => {
    //     console.log(window.scrollY);
    //     if(window.scrollY > 80) {
    //         setFooter(true);
    //     } else {
    //         setFooter(false);
    //     }
    // }

    // window.addEventListener('scroll', changeBackground);


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
