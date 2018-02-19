import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { changePage } from '../../redux/actions/navigation';

import './HistoryItem.css';

const HistoryItem = ({
  id, note, title, editNote,
}) => (
  <div className="HistoryItem-container">
    <div className="HistoryItem-title">{title}</div>
    <div
      className="HistoryItem-text"
      onClick={() => editNote({ id, note, title })}
    >
      {note}
    </div>
  </div>
);

HistoryItem.defaultProps = {
  note: 'Lorem ipsum deloret set ami',
  title: 'Default Title',
  editNote: () => console.log('implement editing'),
};

HistoryItem.propTypes = {
  editNote: PropTypes.func,
  note: PropTypes.string,
  title: PropTypes.string,
};

const mapDispatchToProps = dispatch => ({
  editNote: ({ id, note, title }) => dispatch(changePage('edit', { id, note, title })),
});

export default connect(null, mapDispatchToProps)(HistoryItem);
