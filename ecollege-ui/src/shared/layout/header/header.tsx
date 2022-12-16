import "./header.scss";

import React, { useState } from "react";
import { Navbar, Nav, NavbarToggler, Collapse } from "reactstrap";
import LoadingBar from "react-redux-loading-bar";
import { Home, Brand } from "./header-components";

export interface IHeaderProps {
  isAuthenticated: boolean;
  isAdmin: boolean;
  ribbonEnv: string;
  isInProduction: boolean;
  isOpenAPIEnabled: boolean;
  currentLocale: string;
}

const Header = (props: IHeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const paddingTop = "0px";
  const toggleMenu = () => setMenuOpen(!menuOpen);

  /* jhipster-needle-add-element-to-menu - JHipster will add new menu items here */

  return (
    <div id="app-header" style={{ paddingTop }}>
      <Navbar
        data-cy="navbar"
        dark
        expand="md"
        fixed="top"
        className="jh-navbar"
      >
        <Brand />
      </Navbar>
    </div>
  );
};

export default Header;
