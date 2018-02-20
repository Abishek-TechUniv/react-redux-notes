import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { changePage } from '../../redux/actions/navigation';
import './Footer.css';

const Footer = ({ onSave, footerText }) => (
  <div className="Footer-container">
    <button className="Footer-button" onClick={onSave} >
      {footerText}
    </button>
  </div>
);

Footer.defaultProps = {
  footerText: 'About Us',
  onSave: () => global.console.log('unhandled footer button'),
};

Footer.propTypes = {
  footerText: PropTypes.string,
  onSave: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onSave: (() => {
    dispatch(changePage('new', undefined));
  }),
});
export default connect(null, mapDispatchToProps)(Footer);
