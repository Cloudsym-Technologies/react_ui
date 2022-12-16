import React from "react";
import { NavItem, NavLink, NavbarBrand } from "reactstrap";

export const BrandIcon = () => (
  <div className="brand-icon">
    {/* <img src="content/images/logo-jhipster.png" alt="Logo" /> */}
  </div>
);

export const Brand = (styleProps: any) => (
  <NavbarBrand to="/" className="brand-logo">
    {/* <BrandIcon /> */}
    <span className="brand-title" style={styleProps.colorName}>
      eCollegeMate
    </span>
    <span className="navbar-version">1.0</span>
  </NavbarBrand>
);

export const Home = () => <></>;
