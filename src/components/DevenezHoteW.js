import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// import './DevenezHote.css';

function DevenezHoteW() {
  const Hote = styled.div`
    height: fit-content;
    position: relative;
    color: #fff;
    width: 115px;
  `;

  const Btn = styled.button``;

  const useStyles = makeStyles({
    root: {
      padding: "10px 15px",
      borderRadius: "50px",
      outline: "none",
      position: "relative",
      top: "24px",
      border: "0",
      background: "transparent",
      color: "black",
      cursor: "pointer",
      "&:hover": {
        background: "#ddebf15c",
        color: "black",
      },
      a: {
        color: "#FFF",
      },
    },
  });

  const classes = useStyles();

  return (
    <Hote>
      <div className={classes.root}>
        Devenez hôte<a className={classes.a} href="http:/"></a>
      </div>
    </Hote>
  );
}

export default DevenezHoteW;
