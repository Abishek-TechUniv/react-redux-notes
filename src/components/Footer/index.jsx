import React from 'react';
import { PropTypes } from 'prop-types';
import './Footer.css';

const Footer = ({ onClick, footerText }) => (
  <footer>
    <div className="Footer-container">
      <button className="Footer-button" onClick={onClick()} >
        {footerText}
      </button>
    </div>
  </footer>
);

Footer.defaultProps = {
  footerText: 'About Us',
  onClick: () => console.log('unhandled footer button'),
};

Footer.propTypes = {
  footerText: PropTypes.string,
  onClick: PropTypes.func,
};

export default Footer;
