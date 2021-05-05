import React from 'react'
import HeaderLogo from './HeaderLogo';
import HeaderCenter from './HeaderCenter';
import DevenezHote from './DevenezHote';
import Langues from './Langues';
import Connection from './Connection';
import styled from 'styled-components'

const LogoNav = styled.div`
    display: flex;
    
    height:90px;
    background:black;
    justify-content: space-between;
    padding:0 80px;
`;
const HeaderRight = styled.div`
    width:225px;
    display: flex;
`;

const NavFirst = () => {
    return (
        <>
            <LogoNav>
                <HeaderLogo />
                <HeaderCenter />
                <HeaderRight>
                    <DevenezHote />
                    <Langues />
                    <Connection />
                </HeaderRight>
            </LogoNav> 
        </>
    )
}

export default NavFirst
