import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerBody">
          <div className="row text-center mt-5">
            <p className="fw-bold mb-3">Copyright 2023: Sarthak Niranjan</p>
            <div className="socialIcons">
              <span className="icon">
                <Link
                  to="https://www.instagram.com/fancy.guy_iitb/"
                  target="_blank"
                >
                  <FaInstagram />
                </Link>
              </span>
              <span className="icon">
                <Link to="https://github.com/fancyguyiitb/" target="_blank">
                  <FaGithub />
                </Link>
              </span>
              <span className="icon">
                <Link
                  to="https://www.linkedin.com/in/sarthak-niranjan-abba821a9/"
                  target="_blank"
                >
                  <FaLinkedin />
                </Link>
              </span>
            </div>

            <p className="sourceCode px-2 py-2">
              <a
                // ref="noreferrer"
                href="https://github.com/fancyguyiitb/swiftscribe"
                target="_blank"
              >
                View Source Code
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
