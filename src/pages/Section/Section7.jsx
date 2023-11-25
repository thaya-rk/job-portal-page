import React from 'react';
import arrowRight from '../../assets/arrow-right.svg';
import nasdaq from '../../assets/nasdaq.svg';
import microsoftWhite from '../../assets/microsoft-white.svg';
import goDaddyWhite from '../../assets/go-daddy-white.svg';
import companyLogosCover from '../../assets/company-logos-cover.webp';
import airbnb2 from '../../assets/airbnb-2.svg';
import automatic from '../../assets/automatic.svg';
import bissellWhite from '../../assets/bissell-white.svg';
import coty from '../../assets/coty.svg';
import rancher from '../../assets/rancher.svg';
import '../../css/section-7.css'

const Section7 = () => {
  const onClickLeft = () => {
    // Handle left arrow click
  };

  const onClickRight = () => {
    // Handle right arrow click
  };

  return (
    <section className="section_7 wrapper">
      <h1>
        Trusted by leading<br />
        brands and startups
      </h1>
      <div className="section_7_container">
        <div onClick={onClickLeft} className="section_7_reviews_list_controls_left">
          <img src={arrowRight} alt="" />
        </div>
        <div onClick={onClickRight} className="section_7_reviews_list_controls_right">
          <img src={arrowRight} alt="" />
        </div>
        <div className="section_7_reviews_carousel">
          <div className="section_7_reviews_list">
            {/* Rest of the content */}
            {/* ... */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
