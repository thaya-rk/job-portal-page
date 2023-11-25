import React from 'react';
import microsoftLogo from '../../assets/microsoft.svg';
import airbnbLogo from '../../assets/airbnb.svg';
import godaddyLogo from '../../assets/godaddy-black.svg';
import bissellLogo from '../../assets/bissell.svg';
import talent1 from '../../assets/talent1.webp';
import { Link } from 'react-router-dom';

const Section1 = () => {
  return (
    <section className="container">
      <div className="section_1_bottom">
        <div className="section_1_bottom_left mt-5">
          <h1 className="title-1">
            How people<br />
            should work
          </h1>
          <h3 className="title-3">
          Register and browse projects. Post a job and hire top talent.
          </h3>
          <div className="section_1_bottom_left_btns">
            <Link to="/findtalent">
            <button className="btn_secondary">Find Talent</button>
            </Link>
            <button className="btn_secondary_outline">Find Work</button>
          </div>
        </div>
        <div className="section_1_bottom_right">
          <img src={talent1} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Section1;
