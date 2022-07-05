import React, { useState, useTransition } from "react";
import "../Style/Navbar.css";
import { Link } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minimenu: null,
    };
  }

  handleExpand = () => {
    if (this.state.minimenu === false) {
      this.setState({ minimenu: true });
    } else {
      this.setState({ minimenu: false });
    }
  };
  render() {
    return (
      <div className="navbar">
        <Link id="navbar-home-btn" to="/">
          Moot Court Kazakhstan for High School
        </Link>
        <div
          className={`minimenu ${this.state._color}`}
          onClick={this.handleExpand}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`links ${this.state.minimenu ? `active` : ""}`}>
          <Link
            to="#"
            className="navbar-link"
            style={{ textDecoration: "none" }}
          >
            <Link
              to="#"
              className="navbar-link"
              style={{ textDecoration: "none", padding: "2px" }}
              onClick={() => {
                i18n.changeLanguage("ru");
              }}
            >
              рус |
            </Link>
            <Link
              to="#"
              className="navbar-link"
              style={{ textDecoration: "none", padding: "2px" }}
              onClick={() => {
                i18n.changeLanguage("kz");
              }}
            >
              қаз |
            </Link>
            <Link
              to="#"
              className="navbar-link"
              style={{ textDecoration: "none", padding: "2px" }}
              onClick={() => {
                i18n.changeLanguage("en");
              }}
            >
              eng
            </Link>
          </Link>
          <Link
            to="/about"
            className="navbar-link"
            style={{ textDecoration: "none" }}
            onClick={this.handleExpand}
          >
            О конкурсе
          </Link>
          <Link
            to="/organizers"
            className="navbar-link"
            style={{ textDecoration: "none" }}
            onClick={this.handleExpand}
          >
            Об организаторах конкурса
          </Link>
          <Link
            to="/archive"
            className="navbar-link"
            style={{ textDecoration: "none" }}
            onClick={this.handleExpand}
          >
            Архив
          </Link>
          <Link
            to="/participation"
            className="navbar-link"
            style={{ textDecoration: "none" }}
            onClick={this.handleExpand}
          >
            Участие
          </Link>
          <Link
            to="/results"
            className="navbar-link"
            style={{ textDecoration: "none" }}
            onClick={this.handleExpand}
          >
            Итоги
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
