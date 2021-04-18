import React, {useState, useEffect} from 'react'
import './StickyTop.css'




function StickyTop() {
    const [stickyTop, setStickyTop] = useState(false);   

    const showStickyTop = () => {
        //quand le scroll est en fin de page
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
            console.log('affiche le sticky TOp');
        } else {
            setStickyTop(false);
            console.log('masque le stickytop');
        }

    };

    window.addEventListener('scroll', hideStickyTop);


    return (
        <div className={stickyTop ? 'stickyTop__nav' : ''} id="stickyTop__nav">
            <h1>Le Sticky Top</h1>
        </div>
    )
};
    
export default StickyTop
