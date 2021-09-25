export default class Note {
  static fromMidiCode(code) {
    return new Note(code)
  }

  constructor(midiCode) {
    this.midiCode = midiCode;
  }

  get noteName() {
    const noteNames = ["Do", "", "Re", "", "Mi", "Fa", "", "Sol", "", "La", "", "Si"];

    return noteNames[this.midiCode - 60];
  }

  get abcNoteName() {
    const noteNames = ["C4", "", "D4", "", "E4", "F4", "", "G4", "", "A4", "", "B4"];
    
    return noteNames[this.midiCode - 60];
  }
}