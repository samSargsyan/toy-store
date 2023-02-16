import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
    return(
        <header className="header">
          <Link className="logo" to="/"><img src={logo} alt={logo} width="70px"/></Link>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
          <ul className="menu">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            <li><Link to="/specialDeals">Special Deals</Link></li>
          </ul>
      </header>
    )
}
export default Header;