import Note from './note'

export default class KbInput {

  constructor(noteOnCallback, noteOffCallback) {
    this.noteOnCallback = noteOnCallback;
    this.noteOffCallback = noteOffCallback;

    document.addEventListener('keydown', this.onKeyDown.bind(this), false);
  }

  onKeyDown(event) {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    // console.log(`Key pressed ${name} \r\n Key code value: ${code}`);
    
    const convTable = {
      KeyW: 57,
      KeyE: 59,
      KeyR: 60,
      KeyT: 62,
      KeyY: 64,
      KeyU: 65,
      KeyI: 67,
      KeyO: 69,
      KeyP: 71
    }

    const midiCode = convTable[code]

    if(midiCode) {
      this.noteOnCallback(Note.fromMidiCode(midiCode));
    }
    
  }
}
