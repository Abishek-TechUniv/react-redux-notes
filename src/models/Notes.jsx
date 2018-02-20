class Note {
  constructor(title, note) {
    const uniqueKey = Date.now().toString();
    this.key = uniqueKey;
    this.title = title;
    this.note = note;
  }
}

export default Note;
