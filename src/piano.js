import * as Tone from 'tone'

export default class Piano {
  constructor() {
    //create a synth and connect it to the main output (your speakers)
    this.synth = new Tone.Synth().toDestination();
  }

  play(note) {
    // C4 = middle C (midi value 60)

    // TODO: extrair isso pra classe "Note"
    const noteNames = ["C4", "", "D4", "", "E4", "F4", "", "G4", "", "A4", "", "B4"];
    var noteName = noteNames[note-60];

    //play a middle 'C' for the duration of an 8th note
    this.synth.triggerAttackRelease(noteName, "8n");
  }

  playError() {
    this.synth.triggerAttackRelease("C2", "4n");
  }
}