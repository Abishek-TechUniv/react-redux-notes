import { CREATE_NOTE } from '../actions/notes';
import { GET_NOTES } from '../actions/sync';

import Note from '../../models/Notes';

const defaultState = {
  notesArr: [],
};

const notes = (prevState = defaultState, action) => {
  switch (action.type) {
    case CREATE_NOTE:
      if (!action.payload.id) {
        return {
          ...prevState,
          notesArr:
            [...prevState.notesArr,
              new Note(action.payload.title, action.payload.text),
            ],
        };
      }

      return {
        ...prevState,
        notesArr: prevState.notesArr.map((note) => {
          if (note.id !== action.payload.id) return note;

          return {
            ...note,
            title: action.payload.title,
            note: action.payload.text,
          };
        }),
      };

    case GET_NOTES: {
      return {
        ...prevState,
        notesArr: action.payload,
      };
    }
    default:
      return prevState;
  }
};

export default notes;
