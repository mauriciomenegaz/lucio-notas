import * as Tone from 'tone'

export default class Piano {
  constructor() {
    //create a synth and connect it to the main output (your speakers)
    this.synth = new Tone.Synth().toDestination();
  }

  play(note) {
    // C4 = middle C (midi value 60)

    // TODO: extrair isso pra classe "Note"
    

    //play a middle 'C' for the duration of an 8th note
    this.synth.triggerAttackRelease(note.abcNoteName, "8n");
  }

  playError() {
    this.synth.triggerAttackRelease("C2", "4n");
  }
}