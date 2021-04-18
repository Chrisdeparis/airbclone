import React, {useState, useEffect} from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Popup from './Popup';
import Modal from 'react-modal';


Modal.setAppElement('#root');

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
        <Modal className="popup__right" 
            isOpen={show}
            shouldCloseOnOverlayClick={true}
            onRequestClose={() => setShow(false)}
            style={
                {
                    overlay: {
                        backgroundColor: 'transparent'
                    },
                    content: {
                        position:'absolute',
                        float:'right',
                        right:'0',
                        width:'300px',
                        height:'250px',
                        right:'40px',
                        overflow:'none',
                        inset:'0',
                        backgroundColor:'transparent',
                        border:'0',
                        
                    },
                }
            } >
            <Popup />
        </Modal>
            
        </div>
    )
}

export default Connection
