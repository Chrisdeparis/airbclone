import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function Connection() {
    return (
        <div>
            <button className="connect__btn"><MenuIcon /><AccountCircleIcon className="user" /></button>
        </div>
    )
}

export default Connection
