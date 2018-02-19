const CREATE_NOTE = 'CREATE_NOTE';

const createNote = note => ({
  type: CREATE_NOTE,
  payload: note,
});

export { createNote, CREATE_NOTE };
