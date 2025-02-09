import React from 'react';
import './footer.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <div className='footer-outer-container'>
      <div className="footer-container">
        <div className="footer-icons">
          <ul>
            <li><FacebookOutlinedIcon /></li>
            <li><InstagramIcon /></li>
            <li><YouTubeIcon /></li>
          </ul>
        </div>
        <div className="footer-info">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notices</li>
              {/* <li>Service Code</li> */}
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preference</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <ul>
            <li className='service-code'>Service Code</li>
            <li>&copy;1997-2025 Netflix,Inc.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;