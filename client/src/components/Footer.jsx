import React from "react";
import { githubLogo, linkedinLogo, mernLogo } from ".";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => (
  <center>
    <div className="row">
      <div className="col-md-6 me-md-auto">
        <div className="row justify-content-center pt-5">
          <span className="col spanLink">
            <a href="https://github.com/akainzapantadev" target="_blank">
              <img className="logo" src={githubLogo} />
            </a>
          </span>
          <span className="col spanLink">
            <a
              href="https://www.linkedin.com/in/akainzapantadev/"
              target="_blank"
            >
              <img className="logo" src={linkedinLogo} />
            </a>
          </span>
        </div>
        <span className="text-white">akainzapanta@gmail.com</span>
      </div>
      <div className="col-md-6 p-5">
        <img src={mernLogo} />
      </div>
    </div>
  </center>
);

export default Footer;
