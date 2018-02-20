import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { createNote } from '../../redux/actions/notes';
import { changePage } from '../../redux/actions/navigation';

import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      text: props.text,
      isLimit: false,
    };
  }

 onTitleChanged = (e) => {
   this.setState({ title: e.target.value });
 }

onTextChanged = (e) => {
  let newNote = e.target.value;
  if (newNote.length >= this.props.limit) {
    newNote = newNote.slice(0, this.props.limit);
  }

  this.setState({
    isLimit: newNote.length >= this.props.limit,
    text: newNote,
  });
}

render() {
  return (
    <div className="Form-container">
      <input
        type="text"
        placeholder="Enter text"
        value={this.state.title}
        className="Form-notes-input"
        onChange={e => this.onTitleChanged(e)}
      />
      <p className="Form-directions-text">
        <em>Please type your note below </em>📋
      </p>
      <textarea
        className={this.state.isLimit ?
        'Form-limit-error Form-notes-area' : 'Form-notes-area'}
        value={this.state.text}
        onChange={e => this.onTextChanged(e)
     }
      />
      <div className="Form-details-container">
        <div>
          <button
            className="Form-save"
            onClick={() => this.props.onSave(this.props.id, this.state.text, this.state.title)}
          >
              Save
          </button>
        </div>

        <div className="Form-char-count">
          {this.props.limit - this.state.text.length} chars
        </div>
      </div>

    </div>
  );
}
}
Form.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  onSave: PropTypes.func,
  limit: PropTypes.number.isRequired,
};

Form.defaultProps = {
  id: '',
  title: '',
  text: '',
  onSave: () => global.console.log('implement this'),
};


const mapDispatchToProps = dispatch => ({
  onSave: ((id, text, title) => {
    dispatch(createNote({ id, text, title }));
    dispatch(changePage('history', undefined));
  }),
});

const mapStateToProps = state => ({
  id: state.navigation.currentNote.id,
  title: state.navigation.currentNote.title,
  text: state.navigation.currentNote.note,
});
export default connect(mapStateToProps, mapDispatchToProps)(Form);
