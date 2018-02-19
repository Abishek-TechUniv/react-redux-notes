class Note {
  constructor(title, note) {
    this.id = Date.now().toString();
    this.title = title;
    this.note = note;
  }
}

export default Note;
