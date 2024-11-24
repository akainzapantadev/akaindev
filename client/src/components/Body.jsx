import React, { useState } from 'react';
import { arlogo } from ".";
import { resume } from ".";
import { Toast } from 'react-bootstrap';

const Body = () => {
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
  };

  return (
    <div>
      <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide style={{
        position: 'absolute',
        top: '5%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 999
      }}>
        <Toast.Body>Profile coming soon ...</Toast.Body>
      </Toast>
      <img src={arlogo} style={{ opacity: "0.9", height: "20rem" }} />
      <span id="name_1" className="display-1">
        AKAIN E<span id="name_2">ARL</span> ZAPANTA
      </span>
      <h3 id="sub_name" className="display-6 mx-md-5 my-3">
        Software Engineer
      </h3>
      <a target="_blank" href={resume}>
        <button className="text-muted btn btn-outline-dark mt-3 me-2 mainBGColor mx-md-5" style={{ minWidth: "200px" }}>
          <span className="text-white">DOWNLOAD CV</span>
        </button>
      </a>
      <a href="#" onClick={handleShowToast}>
        <button className="text-muted btn btn-outline-dark mt-3 mx-md-0" style={{ minWidth: "200px" }}>
          VIEW PROFILE
        </button>
      </a>
    </div>
  );
};

export default Body;