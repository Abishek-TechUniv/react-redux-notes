import React from 'react';
import axios from 'axios';

import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { getNotes } from '../../redux/actions/sync';
import { changePage } from '../../redux/actions/navigation';

import Header from '../Header';
import Footer from '../Footer';

import History from '../History';
import Form from '../Form';

import './App.css';

class App extends React.Component {
  componentDidMount() {
    axios.get('/notes').then((notes) => {
      this.props.getNotes(notes);
    });
  }

  render() {
    switch (this.props.page) {
      case 'new': return (
        <div className="App-container">
          <Header titleText="New Note" title="Note Title" lang="en" />
          <Form
            limit={140}
            note={{ title: '', text: '' }}
            changePage={() => this.props.switchPage('history', this.props.currentNote)}
          />
          <Footer />
        </div>
      );
      case 'edit': return (
        <div className="App-container">
          <Header titleText="Edit Note" title="Note Title" lang="en" />
          <Form
            limit={140}
            note={this.props.currentNote}
            changePage={() => this.props.switchPage('history', this.props.currentNote)}
          />
          <Footer />
        </div>
      );
      default: return (
        <div className="App-container">
          <Header titleText="All Notes" title="" lang="" />
          <History />
          <Footer footerText="New Note" />
        </div>
      );
    }
  }
}

App.propTypes = {
  page: PropTypes.string.isRequired,
  currentNote: PropTypes.objectOf(PropTypes.string, PropTypes.string).isRequired,
  switchPage: PropTypes.func.isRequired,
  getNotes: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  page: state.navigation.page,
  currentNote: {
    ...state.navigation.currentNote,
  },
});

const mapDispatchToProps = dispatch => ({
  switchPage: (page, currentNote) => {
    dispatch(changePage(page, currentNote));
  },

  getNotes: (notes) => {
    dispatch(getNotes(notes));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
