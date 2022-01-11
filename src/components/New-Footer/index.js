import React from "react";
import "./style.css";

function Footer() {
  return (
    <div className="meraki-footer">
      <div className="footer-logo"></div>
      <div className="footer-items">
        <div className="footer-items-column">
          <h3>About</h3>
          <span>Meraki Team</span>
          <span>Alumni</span>
          <span>Blog</span>
        </div>
        <div className="footer-items-column">
          <h3>Learning Tracks</h3>
          <span>Python</span>
          <span>Typing Guru</span>
          <span>Spoken English</span>
          <span>Javascript</span>
          <span>Soft Skills</span>
          <span>Open Courses</span>
        </div>
        <div className="footer-items-column">
          <h3>Get Involved</h3>
          <span>Be a Partner</span>
          <span>Donate</span>
          <span>Careers</span>
          <span>Volunteer</span>
        </div>
        <div className="footer-items-column">
          <h3>Learn on Mobile</h3>
          <span>
            <div className="footer-playstore-icon"></div>Now on Playstore
          </span>
        </div>
      </div>
      <hr />
      <div className="footer-row">
        <span>Legal & Privacy Policy</span>
        <span>Made with ❤️ for our students </span>
        <span>
          <div className="footer-social-media-icons">
            <div className="footer-social-icon footer-icon-facebook"></div>
            <div className="footer-social-icon footer-icon-linkedin"></div>
            <div className="footer-social-icon footer-icon-twitter"></div>
          </div>
        </span>
      </div>
      <div className="footer-row footer-NG-info">
        <span>Part of NavGurukul Foundation for Social Welfare</span>
      </div>
    </div>
  );
}

export default Footer;
