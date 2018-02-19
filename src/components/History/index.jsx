import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { changePage } from '../../redux/actions/navigation';
import HistoryItem from '../HistoryItem';
import './History.css';

const History = ({ notesArr, onSave }) => {
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
      <button onClick={onSave}>go back</button>
    </div>);
};

History.propTypes = {
  notesArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSave: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  notesArr: state.notes.notesArr,
});

const mapDispatchToProps = dispatch => ({
  onSave: (() => {
    dispatch(changePage('new', undefined));
  }),
});
export default connect(mapStateToProps, mapDispatchToProps)(History);
