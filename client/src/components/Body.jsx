import React from "react";
import { arlogo } from ".";
import { resume } from ".";

const Body = () => (
  <div>
    <img src={arlogo} style={{ opacity: "0.9", height: "20rem" }} />
    <span id="name_1" className="display-1">
      AKAIN E<span id="name_2">ARL</span>
    </span>
    <h3 id="sub_name" className="display-6">
      Software Developer
    </h3>
    <p className="w-50 text-muted mt-3">CI3 || MERN || APEX</p>
    <a target="_blank" href={resume}>
      <button className="text-muted btn btn-outline-dark mt-3">
        Download Resume
      </button>
    </a>
  </div>
);

export default Body;
