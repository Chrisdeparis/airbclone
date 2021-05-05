import React from "react";
import "./Header.css";

import OuAllezVous from "./OuAllezVous";

import RechercheHeb from "./RechercheHeb";

import StickyTop from "./StickyTop";
import NavFirst from "./NavFirst";

function Header() {
  return (
    <div className="header">
      <NavFirst />
      <RechercheHeb />
      <OuAllezVous />
      <StickyTop />
    </div>
  );
}

export default Header;
