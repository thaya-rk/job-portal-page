import React from 'react';
import starIcon from '../../assets/star.svg';
import '../../css/section-2.css'



const Section2 = () => {
  return (
    <section className="container">
      <div className="section_2_header mt-5">
        <h3>Browse talent by category</h3>
        <div>
          <p>Looking for work?</p>
          <a href="/Category1"> Browse jobs</a>
        </div>
      </div>
      <div className="d-flex">
        <div className="row">
        {[...Array(8)].map((_, index) => (
          <div className="col-md-3 mb-3">
          <div className="section_2_categories_tile" key={index}>
            <h4>Development & IT</h4>
            <div className='row'>
              <div className="col">
              <p className='textSkills d-flex'>
                <img src={starIcon} alt="star" className='staricon'/>
                2/5
              </p>
              </div>
              <div className="col">
              <p className='textSkills'>171 Skills </p>
              </div>
            </div>
          </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
