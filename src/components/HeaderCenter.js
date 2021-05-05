import React from 'react'
import styled from 'styled-components'

function HeaderCenter() {
    return (
        <div className="header__navbar">
            <ul className="header__menu">
                <li>
                    <a href="http:/">Hébergements</a>
                </li>
                <li>
                    <a href="http:/">Expériences</a>
                </li>
                <li>
                    <a href="http:/">Expériences en ligne</a>
                </li>
            </ul>
        </div>
    )
}

export default HeaderCenter
