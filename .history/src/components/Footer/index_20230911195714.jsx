import React from "react";
import "./style.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

export function Footer() {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <a
            href="https://www.instagram.com/guicardoso93/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Instagram} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/guilherme-cardoso-35710b103/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="" />
          </a>
          <a
            href="https://github.com/guilhermecardoso93"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="" />
          </a>
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
}
