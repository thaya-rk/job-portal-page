import React from 'react';
import SkillsIcon from '../../assets/Skills.svg';
import BriefcaseIcon from '../../assets/Briefcase.svg';
import SupportIcon from '../../assets/Support.svg';
import EnterpriseImage from '../../assets/enterprise.png';
import '../../css/section-3.css'


const Section3 = () => {
  return (
    <section className="container">
      <div className="section_3_left">
        <div className="section_3_left_header">
          <h3>For enterprise</h3>
          <h1>
            Scale with<br />
            Enterprise Suite
          </h1>
          <span>
            A fast and secure way to achieve long-term success for your
            <br />business goals.
          </span>
        </div>

        <div className="section_3_left_details">
          <div>
            <img src={SkillsIcon} alt="skills" />
            <p>Access expert talent to fill your skill gaps</p>
          </div>
          <div>
            <img src={BriefcaseIcon} alt="briefcase" />
            <p>Control your workflow: hire, classify and pay your talent</p>
          </div>
          <div>
            <img src={SupportIcon} alt="support" />
            <p>Partner with Upwork for end-to-end support</p>
          </div>
        </div>
        <div className="section_left_btn">
          <button className="btn_primary">Learn More</button>
        </div>
      </div>
      <div className="section_3_right">
        <img src={EnterpriseImage} alt="enterprise" />
      </div>
    </section>
  );
};

export default Section3;
