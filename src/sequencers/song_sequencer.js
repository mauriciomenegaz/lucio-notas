import Note from '../note'

export default class SongSequencer {
  constructor() {
    this.stepNumber = 0;
  }

  nextNote() {
    const notas = [62, 62, 64, 62];
    const midiCode = notas[this.stepNumber];
    this.stepNumber = (this.stepNumber + 1) % notas.length;

    return Note.fromMidiCode(midiCode)
  }
}