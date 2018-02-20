import { CHANGE_PAGE } from '../actions/navigation';

const defaultState = {
  page: 'history',
  currentNote: {
    id: '',
    title: '',
    note: '',
  },
};

const navigation = (prevState = defaultState, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
    {
      let newState = {
        ...prevState,
        page: action.payload.page,
        currentNote: { id: '', title: '', note: '' },
      };

      if (action.payload.page === 'edit') {
        newState = {
          ...newState,
          currentNote: action.payload.currentNote,
        };
      }
      return newState;
    }

    default:
      return prevState;
  }
};

export default navigation;
