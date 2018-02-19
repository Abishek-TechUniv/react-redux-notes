import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { changePage } from '../../redux/actions/navigation';

import Header from '../Header';
import Footer from '../Footer';

import History from '../History';
import Form from '../Form';


const App = ({ page, currentNote, switchPage }) => {
  switch (page) {
    case 'new': return (
      <div>
        <Header />
        <Form
          limit={10}
          note={{ title: '', text: '' }}
          changePage={() => switchPage('history', currentNote)}
        />
        <Footer />
      </div>
    );
    case 'edit': return (
      <div>
        <Header />
        <Form
          limit={10}
          note={currentNote}
          changePage={() => switchPage('history', currentNote)}
        />
        <Footer />
      </div>
    );
    default: return (
      <div>
        <Header />
        <History />
        <Footer />
      </div>
    );
  }
};

App.propTypes = {
  page: PropTypes.string.isRequired,
  currentNote: PropTypes.objectOf(PropTypes.string, PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  page: state.navigation.page,
  currentNote: {
    ...state.navigation.currentNote,
  },
});

const mapDispatchToProps = dispatch => ({
  switchPage: (page, currentNote) => { dispatch(changePage(page, currentNote)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
