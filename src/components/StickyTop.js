import React, {useState, useEffect} from 'react'

import styled from 'styled-components';




function StickyTop() {
    const [stickyTop, setStickyTop] = useState(false);   

    const showStickyTop = () => {
        //quand le scroll dépasse 60px
        let limit = 60;
        if(window.scrollY > limit){            
            const sticky = document.getElementById('stickyTop__nav');
            sticky.style.display='';   
        } else { 
            const sticky = document.getElementById('stickyTop__nav');
            sticky.style.display='none';
            
        }
       
    };

    useEffect(() => {
        showStickyTop();
        
    });
    
    const hideStickyTop = () => {
        let limit = 60;
        if(window.scrollY > limit) {
            setStickyTop(true);
        } else {
            setStickyTop(false);
        }

    };

    window.addEventListener('scroll', hideStickyTop);

    const NavSticky = styled.div`
        position:fixed;
        width:100%;
        top:0;
        height: 80px;
        background:#fff!important;
        color:#000;
        z-index: 1000;
        opacity:1!important;
    `;


    return (
        <NavSticky className={stickyTop ? 'stickyTop__nav' : ''} id="stickyTop__nav">
            <h1>Le Sticky Top</h1>
        </NavSticky>
    )
};
    
export default StickyTop
