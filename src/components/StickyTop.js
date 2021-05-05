import React, { useState, useEffect } from "react";

import styled from "styled-components";
import DevenezHoteW from "./DevenezHoteW";
import LanguesW from "./LanguesW";
import ConnectionW from "./ConnectionW";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import HeaderLogo from "./HeaderLogo";
import HeaderCenter from "./HeaderCenter";
import DevenezHote from "./DevenezHote";
import Langues from "./Langues";
import Connection from "./Connection";

function StickyTop() {
  const [stickyTop, setStickyTop] = useState(false);

  const showStickyTop = () => {
    //quand le scroll dépasse 60px
    let limit = 60;
    if (window.scrollY > limit) {
      const sticky = document.getElementById("stickyTop__nav");
      sticky.style.display = "";
      sticky.classList.add("btnWhite");
    } else {
      const sticky = document.getElementById("stickyTop__nav");
      sticky.style.display = "none";
    }
  };

  useEffect(() => {
    showStickyTop();
  });

  const hideStickyTop = () => {
    let limit = 60;
    if (window.scrollY > limit) {
      setStickyTop(true);
    } else {
      setStickyTop(false);
    }
  };

  window.addEventListener("scroll", hideStickyTop);

  const NavSticky = styled.div`
    position: fixed;
    display: flex;

    top: 0;
    height: 90px;
    background: #fff;
    color: red;
    z-index: 100;
    opacity: 1;
    padding: 0 80px;
    -webkit-box-shadow: 0 5px 4px -6px #767676;
    -moz-box-shadow: 0 5px 4px -6px #767676;
    box-shadow: 0 5px 4px -6px #767676;

    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 90px;
    background: white;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 80px;
  `;

  const svg = styled.svg`
    color: #ff385c;
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
    padding-left: 20px;
    cursor: pointer;
    font-weight: bold;
    color: black;
    font-size: 11px;
    position: relative;
    top: 22px;
    &::placeholder {
      color: #222222;
    }
    &:hover {
      -webkit-box-shadow: 0 5px 6px -6px #767676;
      -moz-box-shadow: 0 5px 6px -6px #767676;
      box-shadow: 0 5px 6px -6px #767676;
    }
  `;

  const HeaderRightW = styled.div`
    display: flex;
    margin-right: 80px;
    padding-right: 80px;
  `;

  const useStyles = makeStyles({
    sticky__btn__search: {
      background: "#ff385c",
      width: "18px",
      height: "18px",
      position: "relative",
      top: "5px",
      left: "5px",
      color: "#fff",
      cursor: "pointer",
    },
    root: {
      position: "relative",
      top: "26px",
      height: "28px",
      width: "28px",
      borderRadius: "50%",
      background: "#ff385c",
      right: "32px",
    },
    stickycenter: {
      display: "flex",
    },
  });

  const classes = useStyles();

  return (
    <NavSticky id="stickyTop__nav">
      <div className="">
        <div className="header__logo">
          <a href="http:/">
            <Img className="header__icon" src="img/logo.svg" alt="" />
            <svg
              className="logo__text"
              width="63"
              height="17"
              viewBox="0 0 63 17"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.16175 16.6125C5.411 16.6125 4.72031 16.4623 4.08968 16.162C3.45905 15.8617 2.91851 15.4413 2.43803 14.9008C1.95754 14.3602 1.59719 13.7296 1.32691 13.0389C1.05664 12.3182 0.936523 11.5374 0.936523 10.6965C0.936523 9.85571 1.08668 9.04489 1.35695 8.32417C1.62722 7.60345 2.01761 6.97282 2.49809 6.40225C2.97857 5.86171 3.54914 5.41126 4.2098 5.11096C4.87046 4.81066 5.56115 4.66051 6.34193 4.66051C7.09268 4.66051 7.75334 4.81066 8.35395 5.14099C8.95455 5.44129 9.43502 5.89174 9.82541 6.46231L9.91551 4.99084H12.6783V16.3122H9.91551L9.82541 14.6605C9.43502 15.2611 8.92451 15.7416 8.26385 16.102C7.66325 16.4323 6.94253 16.6125 6.16175 16.6125ZM6.88247 13.9098C7.42301 13.9098 7.90349 13.7596 8.35395 13.4893C8.77437 13.189 9.10469 12.7986 9.37496 12.3182C9.6152 11.8377 9.73532 11.2671 9.73532 10.6365C9.73532 10.0059 9.6152 9.43528 9.37496 8.9548C9.13472 8.47432 8.77437 8.08393 8.35395 7.78363C7.93352 7.48333 7.42301 7.36321 6.88247 7.36321C6.34193 7.36321 5.86145 7.51336 5.411 7.78363C4.99058 8.08393 4.66025 8.47432 4.38998 8.9548C4.14974 9.43528 4.02962 10.0059 4.02962 10.6365C4.02962 11.2671 4.14974 11.8377 4.38998 12.3182C4.63022 12.7986 4.99058 13.189 5.411 13.4893C5.86145 13.7596 6.34193 13.9098 6.88247 13.9098ZM17.393 1.92778C17.393 2.25811 17.3329 2.55841 17.1828 2.79865C17.0326 3.03889 16.8224 3.2491 16.5521 3.39925C16.2819 3.5494 15.9816 3.60946 15.6813 3.60946C15.381 3.60946 15.0807 3.5494 14.8104 3.39925C14.5401 3.2491 14.3299 3.03889 14.1798 2.79865C14.0296 2.52838 13.9696 2.25811 13.9696 1.92778C13.9696 1.59744 14.0296 1.29714 14.1798 1.0569C14.3299 0.786633 14.5401 0.606453 14.8104 0.456303C15.0807 0.306153 15.381 0.246094 15.6813 0.246094C15.9816 0.246094 16.2819 0.306153 16.5521 0.456303C16.8224 0.606453 17.0326 0.816663 17.1828 1.0569C17.3029 1.29714 17.393 1.56741 17.393 1.92778ZM14.1798 16.2821V4.96081H17.1828V16.2821H14.1798ZM25.2008 7.93378V7.96381C25.0506 7.90375 24.8705 7.87372 24.7203 7.84369C24.5401 7.81366 24.39 7.81366 24.2098 7.81366C23.369 7.81366 22.7383 8.0539 22.3179 8.56441C21.8675 9.07492 21.6572 9.79564 21.6572 10.7266V16.2821H18.6542V4.96081H21.417L21.5071 6.67252C21.8074 6.07192 22.1678 5.62147 22.6783 5.29114C23.1587 4.96081 23.7293 4.81066 24.39 4.81066C24.6002 4.81066 24.8104 4.84069 24.9906 4.87072C25.0807 4.90075 25.1407 4.90075 25.2008 4.93078V7.93378ZM26.402 16.2821V0.306153H29.405V6.40225C29.8254 5.86171 30.3059 5.44129 30.9065 5.11096C31.5071 4.81066 32.1678 4.63048 32.9185 4.63048C33.6693 4.63048 34.3599 4.78063 34.9906 5.08093C35.6212 5.38123 36.1618 5.80165 36.6422 6.34219C37.1227 6.88273 37.4831 7.51336 37.7533 8.20405C38.0236 8.92477 38.1437 9.70555 38.1437 10.5464C38.1437 11.3872 37.9936 12.198 37.7233 12.9188C37.453 13.6395 37.0627 14.2701 36.5822 14.8407C36.1017 15.3812 35.5311 15.8317 34.8705 16.132C34.2098 16.4323 33.5191 16.5824 32.7383 16.5824C31.9876 16.5824 31.3269 16.4323 30.7263 16.102C30.1257 15.8017 29.6452 15.3512 29.2549 14.7806L29.1648 16.2521L26.402 16.2821ZM32.1978 13.9098C32.7383 13.9098 33.2188 13.7596 33.6693 13.4893C34.0897 13.189 34.42 12.7986 34.6903 12.3182C34.9305 11.8377 35.0506 11.2671 35.0506 10.6365C35.0506 10.0059 34.9305 9.43528 34.6903 8.9548C34.42 8.47432 34.0897 8.08393 33.6693 7.78363C33.2488 7.48333 32.7383 7.36321 32.1978 7.36321C31.6572 7.36321 31.1768 7.51336 30.7263 7.78363C30.3059 8.08393 29.9756 8.47432 29.7053 8.9548C29.4651 9.43528 29.3449 10.0059 29.3449 10.6365C29.3449 11.2671 29.4651 11.8377 29.7053 12.3182C29.9455 12.7986 30.3059 13.189 30.7263 13.4893C31.1768 13.7596 31.6572 13.9098 32.1978 13.9098ZM39.2849 16.2821V4.96081H42.0476L42.1377 6.43228C42.4681 5.89174 42.9185 5.47132 43.4891 5.14099C44.0597 4.81066 44.7203 4.66051 45.4711 4.66051C46.3119 4.66051 47.0326 4.87072 47.6332 5.26111C48.2639 5.6515 48.7443 6.22207 49.0747 6.94279C49.405 7.66351 49.5852 8.53438 49.5852 9.52537V16.3122H46.5822V9.91576C46.5822 9.13498 46.402 8.50435 46.0416 8.0539C45.6813 7.60345 45.2008 7.36321 44.5702 7.36321C44.1197 7.36321 43.7293 7.4533 43.369 7.66351C43.0386 7.87372 42.7684 8.14399 42.5582 8.53438C42.3479 8.89474 42.2579 9.34519 42.2579 9.79564V16.2821H39.2849ZM51.0867 16.2821V0.306153H54.0897V6.40225C54.5101 5.86171 54.9906 5.44129 55.5912 5.11096C56.1918 4.81066 56.8524 4.63048 57.6032 4.63048C58.354 4.63048 59.0446 4.78063 59.6753 5.08093C60.3059 5.38123 60.8464 5.80165 61.3269 6.34219C61.8074 6.88273 62.1678 7.51336 62.438 8.20405C62.7083 8.92477 62.8284 9.70555 62.8284 10.5464C62.8284 11.3872 62.6783 12.198 62.408 12.9188C62.1377 13.6395 61.7473 14.2701 61.2669 14.8407C60.7864 15.3812 60.2158 15.8317 59.5552 16.132C58.8945 16.4323 58.2038 16.5824 57.423 16.5824C56.6723 16.5824 56.0116 16.4323 55.411 16.102C54.8104 15.8017 54.3299 15.3512 53.9395 14.7806L53.8494 16.2521L51.0867 16.2821ZM56.9125 13.9098C57.453 13.9098 57.9335 13.7596 58.384 13.4893C58.8044 13.189 59.1347 12.7986 59.405 12.3182C59.6452 11.8377 59.7654 11.2671 59.7654 10.6365C59.7654 10.0059 59.6452 9.43528 59.405 8.9548C59.1648 8.47432 58.8044 8.08393 58.384 7.78363C57.9636 7.48333 57.453 7.36321 56.9125 7.36321C56.372 7.36321 55.8915 7.51336 55.441 7.78363C55.0206 8.08393 54.6903 8.47432 54.42 8.9548C54.1497 9.43528 54.0597 10.0059 54.0597 10.6365C54.0597 11.2671 54.1798 11.8377 54.42 12.3182C54.6603 12.7986 55.0206 13.189 55.441 13.4893C55.8915 13.7596 56.3419 13.9098 56.9125 13.9098Z"
                fill="#FF385C"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className={classes.stickycenter}>
        <InputSticky type="text" placeholder="Commencer votre recherche" />
        <div className={classes.root}>
          <SearchIcon className={classes.sticky__btn__search} />
        </div>
      </div>
      <HeaderRightW>
        <DevenezHoteW />
        <LanguesW fontSize="small" />
        <Connection />
      </HeaderRightW>
    </NavSticky>
  );
}

export default StickyTop;
