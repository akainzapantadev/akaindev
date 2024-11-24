import React from "react";
import { githubLogo, linkedinLogo, mernLogo, sforceLogo, reactNat } from ".";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => (
  <center className="mt-5">
    <div className="row">
      <div className="col-md-4 m-md-0 my-3">
        <img src={sforceLogo} style={{ maxWidth: '150px' }} />
      </div>
      <div className="col-md-4 m-md-0 my-3">
        <img src={mernLogo} />
      </div>
      <div className="col-md-4 m-md-0 my-3">
        <img src={reactNat} style={{ maxWidth: '150px' }} />
      </div>
    </div>
  </center>
);

export default Footer;
