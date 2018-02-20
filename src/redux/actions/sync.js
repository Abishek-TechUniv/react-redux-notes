const GET_NOTES = 'GET_NOTES';
const PUT_NOTES = 'PUT_NOTES';

const getNotes = note => ({
  type: GET_NOTES,
  payload: note.data,
});

const putNotes = note => ({
  type: PUT_NOTES,
  payload: note,
});
export { getNotes, putNotes, GET_NOTES, PUT_NOTES };
