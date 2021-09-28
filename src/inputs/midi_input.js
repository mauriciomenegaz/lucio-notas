import Note from '../note'

export default class MidiInput {
  constructor(noteOnCallback, noteOffCallback) {
    if (navigator.requestMIDIAccess) {
      console.log('This browser supports WebMIDI!');
    } else {
      console.log('WebMIDI is not supported in this browser.');
    }

    this.noteOnCallback = noteOnCallback;
    this.noteOffCallback = noteOffCallback;

    navigator.requestMIDIAccess()
             .then(this.onMIDISuccess.bind(this), 
                   this.onMIDIFailure.bind(this));
  }

  onMIDISuccess(midiAccess) {
    var inputs = midiAccess.inputs;

    for (var input of midiAccess.inputs.values()) {
      input.onmidimessage = this.getMIDIMessage.bind(this);
    }
  }

  onMIDIFailure() {
    console.log('Could not access your MIDI devices.');
  }

  getMIDIMessage(message) {
    var command = message.data[0];
    var note = message.data[1];
    var velocity = (message.data.length > 2) ? message.data[2] : 0; // a velocity value might not be included with a noteOff command
  
    switch (command) {
      case 144:
        this.noteOn(note);
        break;
      case 128:
        this.noteOff(note);
        break;
    }
  }

  noteOn(note) {
    this.noteOnCallback(Note.fromMidiCode(code));
  }

  noteOff(note) {
    this.noteOffCallback();
  }
}