import React, {useState, useEffect} from 'react'

import styled from 'styled-components';
import DevenezHote from './DevenezHote';
import Langues from './Langues';
import Connection from './Connection';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';



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
        display:flex;
        justify-content:space-between;
        width:90%;
        top:0;
        height: 80px;
        background:#fff;
        color:red;
        z-index: 1000;
        opacity:1!important;
        padding:0 80px;
        -webkit-box-shadow: 0 5px 4px -6px #767676;
            -moz-box-shadow: 0 5px 4px -6px #767676;
            box-shadow: 0 5px 4px -6px #767676;
    `;
    
    const Img = styled.img`
        object-fit: contain;
        height: 40px;
        margin-top: 20px;
        
    `;
    const InputSticky = styled.input`
        width: 240px;
        height: 32px;
        border-radius: 50px;
        outline: none;
        border: 1px solid #dfdfdf;
        padding-left:20px;
        cursor: pointer;
        font-weight: bold;
        color: black;
        font-size: 11px;
        position:relative;
        top:22px;
        &::placeholder {
            color:#222222;


        }
        &:hover {
            -webkit-box-shadow: 0 5px 6px -6px #767676;
            -moz-box-shadow: 0 5px 6px -6px #767676;
            box-shadow: 0 5px 6px -6px #767676;
        }
    `;

    

    


    const useStyles = makeStyles({
        sticky__btn__search: {
        background: '#ff385c',
        width: '18px',
        height: '18px',
        position: 'relative',
        top: '5px',
        left: '5px',
        color: '#fff',
        cursor: 'pointer',
        
        },
        root: {
            position: 'relative',
            top: '26px',
            height: '28px',
            width: '28px',
            borderRadius: '50%',
            background: '#ff385c',
            right: '32px',
        },
        stickycenter: {
            display: "flex",
        }

    });

    const classes = useStyles();

    
    

    

    return (
        <NavSticky id="stickyTop__nav">
            <Img src="img/logo.svg" alt=""/>
            <div className={classes.stickycenter}>
                <InputSticky type="text" placeholder="Commencer votre recherche" /> 
                <div className={classes.root}>
                    <SearchIcon className={classes.sticky__btn__search}                                          />
                </div>
            </div>
            
            <div className="header__right">
                <DevenezHote />
                <Langues />
                <Connection />
            </div>
                
            
        </NavSticky>
    )
};
    
export default StickyTop
