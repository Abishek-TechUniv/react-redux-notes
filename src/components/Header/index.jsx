import React from 'react';
import { PropTypes } from 'prop-types';

import './Header.css';


const Header = ({ title, lang, titleText }) => (
  <div>
    <div className="Title-header">
      {titleText}
    </div>
    <div className="Header-container">
      <div className="Header-title">{title}</div>
      <div ><button className="Header-lang">{lang}</button></div>
    </div>
  </div>);

Header.propTypes = {
  title: PropTypes.string,
  lang: PropTypes.string,
  titleText: PropTypes.string,
};

Header.defaultProps = {
  title: '',
  lang: '',
  titleText: '',
};

export default Header;
