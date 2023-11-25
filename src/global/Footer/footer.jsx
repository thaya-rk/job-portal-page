import React from 'react';
import '../../css/footer.css'

const Footer = () => {
  return (
    
    <footer className="footer">
      <div className="wrapper">
        <div className="footer_top">
          <div className="footer_top_list">
      
          </div>
          {/* ... Similar blocks for "For Talent", "Resources", and "Company" */}
        </div>
        <div className="footer_middle">
          <div className="footer_middle_left">
            <h5>Follow Us</h5>
            <div className="footer_middle_left_list">
              <div className="footer_icons">
                <img src={require('../../assets/facebook.svg')} alt="facebook" />
              </div>
              <div className="footer_icons">
                <img src={require('../../assets/linkedIn.svg')} alt="linkedIn" />
              </div>
              {/* ... More icons */}
            </div>
          </div>
          {/* ... Similar block for "Mobile app" */}
        </div>
        <div className="footer_bottom">
          <p>© 2015 - 2022 Upwork® Global Inc.</p>
          <ul className="footer_bottom_list">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>CA Notice at Collection</li>
            <li>Cookie Settings</li>
            <li>Accessibility</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
