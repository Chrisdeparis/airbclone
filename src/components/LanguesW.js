import React from "react";
import LanguageIcon from "@material-ui/icons/Language";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

function LanguesW() {
  const useStyles = makeStyles({
    langBtnW: {
      height: "40px",
      width: "40px",
      borderRadius: "50% 50%",
      background: "transparent",
      outline: "none",
      cursor: "pointer",
      color: "black",
      border: "0",
      position: "relative",
      top: "24px",
      "&:hover": {
        background: "#ddebf15c",
      },
    },
  });

  const classes = useStyles();

  return (
    <div>
      <button className={classes.langBtnW}>
        <LanguageIcon />
      </button>
    </div>
  );
}

export default LanguesW;
