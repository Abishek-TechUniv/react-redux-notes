import React from 'react';
import { PropTypes } from 'prop-types';

import './Header.css';


const Header = ({ title, lang, titleText }) => (
  <header>
    <div className="Title-header">
      {titleText}
    </div>
    <div className="Header-container">
      <div className="Header-title">{title}</div>
      <div ><button className="Header-lang">{lang}</button></div>
    </div>
  </header>);

Header.propTypes = {
  title: PropTypes.string,
  lang: PropTypes.string,
  titleText: PropTypes.string,
};

Header.defaultProps = {
  title: 'Title',
  lang: 'en',
  titleText: 'New Note',
};

export default Header;
