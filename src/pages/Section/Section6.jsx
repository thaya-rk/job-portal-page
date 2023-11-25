import React from 'react';
import '../../css/section-6.css'

const Section6 = () => {
  return (
    <section className="section_6 wrapper">
      <div className="section_6_left">
        <img src="../../assets/find-great-work.jpg" alt="" />
      </div>
      <div className="section_6_right">
        <div className="section_6_right_top">
          <h3>For talent</h3>
          <h1>
            Find great<br />
            work
          </h1>
          <p>
            Meet clients you’re excited to work with and take <br />your career
            or business to new heights.
          </p>
        </div>
        <hr />
        <div className="section_6_right_middle">
          <p id="text-1">
            Find opportunities<br />
            for every stage of<br />
            your freelance<br />
            career
          </p>

          <p>
            Control when,<br />
            where, and how <br />you work
          </p>

          <p>
            Explore different<br />
            ways to earn
          </p>
        </div>
       
      </div>
    </section>
  );
};

export default Section6;
