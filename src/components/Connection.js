import React, {useState, useEffect} from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Popup from './Popup';




function Connection() {
    
    const [show, setShow] = useState(false);

    console.log(setShow);

    useEffect(() => {
        setShow();
    }, []);

    console.log(show);

    return (
        <div>
        <button className="connect__btn" onClick={() => setShow(show => !show)}>
            <MenuIcon /><AccountCircleIcon className="user" />
        </button>
        {show && <Popup show={show} /> }
            
             
             
             
        </div>
    )
}

export default Connection
