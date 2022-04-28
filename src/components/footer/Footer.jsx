import React from "react";
import "./footer.scss";

import { Link } from "react-router-dom";

import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/tmovie.png";
import logo2 from "../../assets/movie.png";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo2} alt="" />
            <Link to="/">tMovies</Link>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About us</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Privacy policy</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">You must watch</Link>
            <Link to="/">Recent release</Link>
            <Link to="/">Top IMDB</Link>
          </div>
        </div>
        <div className="footer__content__copyright">
          <div className="footer__content">
            <a href="https://christianlazoporfolio.netlify.app/">
              Christian Lazo
            </a>
            <span> || &copy; All Rights Reserved 2022</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
