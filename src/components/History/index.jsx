import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import HistoryItem from '../HistoryItem';
import './History.css';

const History = ({ notesArr }) => {
  const itemsArr = notesArr.map(note => (
    <HistoryItem
      key={note.id}
      id={note.id}
      note={note.note}
      title={note.title}
    />
  ));
  return (
    <div className="History-section">
      {itemsArr}
    </div>);
};

History.propTypes = {
  notesArr: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  notesArr: state.notes.notesArr,
});

export default connect(mapStateToProps, null)(History);
