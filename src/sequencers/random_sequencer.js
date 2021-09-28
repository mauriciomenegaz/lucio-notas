import Note from '../note'

export default class RandomSequencer {
  nextNote() {
    const notas = [60, 62, 64, 65, 67];
    const midiCode = notas[Math.floor(Math.random() * notas.length)];
    return Note.fromMidiCode(midiCode)
  }
}