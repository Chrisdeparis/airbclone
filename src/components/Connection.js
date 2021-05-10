import React, { useState, useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Popup from "./Popup";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Connection = () => {
  const [show, setShow] = useState(false);

  console.log(setShow);

  useEffect(() => {
    setShow();
  }, []);

  console.log(show);

  return (
    <div>
      <button className="connect__btn" onClick={() => setShow((show) => !show)}>
        <MenuIcon />
        <AccountCircleIcon className="user" />
      </button>
      <Modal
        className="popup__right"
        id="right"
        isOpen={show}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setShow(false)}
        style={{
          overlay: {
            backgroundColor: "transparent",
          },
          content: {
            position: "absolute",
            right: "87px",
            width: "215px",
            height: "236px",
            overflow: "none",
            backgroundColor: "transparent",
            border: "0",
          },
        }}
      >
        <Popup />
      </Modal>
      {show}
    </div>
  );
};

export default Connection;
