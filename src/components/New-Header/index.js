import React from "react";
import "./style.scss";
import python from "../../asset/python.png";
import typing from "../../asset/typing.png";
import web from "../../asset/web.png";
import language from "../../asset/language.png";
import softskills from "../../asset/softSkills.png";
import { useState, useEffect, useRef } from "react";

function Header() {
  const [responsive, setResponsive] = useState(false);
  const [explore, setExplore] = useState(false);
  const [about, setAbout] = useState(false);
  const [involve, setInvolve] = useState(false);
  const [language, setLanguage] = useState(false);
  const [optionItem, setOptionItem] = useState({
    explore: false,
    about: false,
    language: false,
  });
  return (
    <div
      className="ng-header"
      style={responsive ? { backgroundColor: "#e4f8ca" } : {}}
    >
      <div className="logo">
        <a href="/">
          <div className="meraki-logo" />
          <div className="meraki-name" />
        </a>
      </div>
      <div className="dropdown-container">
        <OutsideAlerter
          handleClick={() => {
            setExplore(false);
          }}
        >
          <button
            className="ng-dropdown"
            onClick={() => {
              setExplore(!explore);
              console.log("demo");
            }}
          >
            Explore{" "}
            <span
              className="dropdown-content pathway-dropdown"
              style={explore ? { display: "block" } : {}}
            >
              <h2>Learning Tracks</h2>
              <div className="pathway-row">
                <div className="pathway-card">
                  <h2>Python</h2>
                  <p>Get familiar with programming with bite sized lessons</p>
                  <img className="pathway-icon" src={python}></img>
                </div>
                <div className="pathway-card">
                  <h2>Typing Guru</h2>
                  <p>Learn to type with accuracy and speed</p>
                  <img className="pathway-icon" src={typing}></img>
                </div>
                <div className="pathway-card">
                  <h2>Javascript</h2>
                  <p>Learn the basics of tech that powers the web</p>
                  <img className="pathway-icon" src={web}></img>
                </div>
              </div>
              <div className="pathway-row">
                <div className="pathway-card">
                  <h2>English</h2>
                  <p>Master English with easy to understand courses</p>
                  <img className="pathway-icon" src={language}></img>
                </div>
                <div className="pathway-card">
                  <h2>Soft Skills</h2>
                  <p>Interview preparation to get you job ready</p>
                  <img className="pathway-icon" src={softskills}></img>
                </div>
              </div>
              <hr />
              <div className="pathway-row">
                <div className="pathway-card">
                  <h2>Open Courses</h2>
                  <p>Random courses on topics Android, Game development</p>
                </div>
              </div>
            </span>
          </button>
        </OutsideAlerter>
        <OutsideAlerter
          handleClick={() => {
            setAbout(false);
          }}
        >
          <button
            className="ng-dropdown"
            onClick={() => {
              setAbout(!about);
            }}
          >
            About{" "}
            <span
              className="dropdown-content"
              style={about ? { display: "block" } : {}}
            >
              <ul>
                <li>Meraki Team</li>
                <li>Alumni</li>
                <li>Blog</li>
              </ul>
            </span>
          </button>
        </OutsideAlerter>
        <OutsideAlerter
          handleClick={() => {
            setInvolve(false);
          }}
        >
          <button
            className="ng-dropdown"
            onClick={() => {
              setInvolve(!involve);
            }}
          >
            Get Involved{" "}
            <span
              className="dropdown-content"
              style={involve ? { display: "block" } : {}}
            >
              <ul>
                <li>Be a Partner</li>
                <li>Donate</li>
                <li>Careers</li>
                <li>Volunteer</li>
              </ul>
            </span>
          </button>
        </OutsideAlerter>
      </div>
      <span className="header-searchbar">
        <input type="text" placeholder="Courses, tracks..." />
      </span>
      <OutsideAlerter
        handleClick={() => {
          setLanguage(false);
        }}
      >
        <button
          className="ng-dropdown"
          onClick={() => {
            setLanguage(!language);
          }}
        >
          English{" "}
          <span
            className="dropdown-content"
            style={language ? { display: "block" } : {}}
          >
            <ul>
              <li>English</li>
              <li>Hindi</li>
            </ul>
          </span>
        </button>
      </OutsideAlerter>
      <button className="login-btn">Log In</button>
      <a
        className="hamburger-menu"
        onClick={() => {
          setResponsive(!responsive);
        }}
      ></a>
      <div
        className="ng-header-options"
        style={
          responsive
            ? { height: "auto", padding: "30px 20px", overflow: "auto" }
            : {}
        }
      >
        <a
          className="options-item"
          onClick={() => {
            setOptionItem({ ...optionItem, explore: !optionItem.explore });
          }}
        >
          Explore
        </a>
        <span
          className="options-item-options"
          style={optionItem.explore ? { height: "auto", overflow: "auto" } : {}}
        >
          <ul>
            <li>Python</li>
            <li>Typing Guru</li>
            <li>Spoken English</li>
            <li>Javascript</li>
            <li>Soft Skills</li>
            <li>Open Courses</li>
          </ul>
        </span>
        <a
          className="options-item"
          onClick={() => {
            setOptionItem({ ...optionItem, about: !optionItem.about });
          }}
        >
          About
        </a>
        <span
          className="options-item-options"
          style={optionItem.about ? { height: "auto", overflow: "auto" } : {}}
        >
          <ul>
            <li>Meraki Team</li>
            <li>Alumini</li>
            <li>Blog</li>
          </ul>
        </span>
        <a
          className="options-item"
          onClick={() => {
            setOptionItem({ ...optionItem, involve: !optionItem.involve });
          }}
        >
          Get Involved
        </a>
        <span
          className="options-item-options"
          style={optionItem.involve ? { height: "auto", overflow: "auto" } : {}}
        >
          <ul>
            <li>Be a Prtner</li>
            <li>Donate</li>
            <li>Careers</li>
            <li>Volunteer</li>
          </ul>
        </span>
        <a className="options-item">Download Meraki App</a>
        <button className="option-login-btn">Log In</button>
      </div>
    </div>
  );
}

export default Header;

// https://stackoverflow.com/questions/32553158/detect-click-outside-react-component

function useOutsideAlerter(ref, handleClick = false) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target) && handleClick) {
        handleClick();
        console.log("run");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handleClick]);
}

function OutsideAlerter(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.handleClick);

  return (
    <div ref={wrapperRef} className="d-inline">
      {props.children}
    </div>
  );
}
