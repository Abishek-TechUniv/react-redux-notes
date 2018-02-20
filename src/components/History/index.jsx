import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { putNotes } from '../../redux/actions/sync';

import HistoryItem from '../HistoryItem';
import './History.css';

const History = ({ notesArr, push }) => {
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
      <img
        className="History-sync-icon"
        alt="sync-icon"
        src="https://png.icons8.com/material/50/000000/connection-sync.png"
        onClick={() => push(notesArr)}
      />

      {itemsArr}
    </div>);
};

History.propTypes = {
  notesArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  push: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  notesArr: state.notes.notesArr,
});

const mapDispatchToProps = dispatch => ({
  push: notesArr => dispatch(putNotes(notesArr)),
});
export default connect(mapStateToProps, mapDispatchToProps)(History);
