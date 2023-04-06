import React from "react";
import { arlogo } from ".";
import { resume } from ".";

const Body = () => (
  <div>
    <img src={arlogo} style={{ opacity: "0.9" }} />
    <span id="name_1" className="display-1">
      AKAIN E<span id="name_2">ARL</span>
    </span>
    <h3 id="sub_name" className="display-6">
      Full Stack Developer
    </h3>
    <p className="w-50 text-muted">
      I use MERN stack and I make web apps for fun.
    </p>
    <a target="_blank" href={resume}>
      <button className="text-muted btn btn-outline-dark mt-3">
        Download Resume
      </button>
    </a>
    {/* <div className="p-5">
      <div class="bg-dark max-w-sm rounded overflow-hidden shadow-lg">
        <div className="opac-80">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-white">
              The Coldest Sunset
            </div>
            <p class="text-white text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div> */}
  </div>
);

export default Body;
