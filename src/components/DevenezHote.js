import React from 'react'
import styled from 'styled-components'

// import './DevenezHote.css';

function DevenezHote() {

    const divHote = styled.div`
        height: fit-content;
        position:relative;
        top:28px;
        color:#FFF;
    `;

    const Btn = styled.button`
        padding:10px 15px;
        border-radius: 50px;
        outline:none;
        position:relative;
        top:24px;
        border:0;
        background:transparent;
        color:#fff;
        
        &:a {
            color:#fff;
        }
        &:hover {
            background:#222222;
            color:#fff;
        }
    `;

    const HoteLien = styled.a`
        color: white;
        text-decoration: none;
    `;

    

    return (
        <divHote>
           <Btn><HoteLien href="http:/">Devenez hôte</HoteLien></Btn> 
        </divHote>
    )
}

export default DevenezHote
