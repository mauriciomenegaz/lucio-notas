import * as Tone from 'tone'

export default class Piano {
  constructor() {
    //create a synth and connect it to the main output (your speakers)
    this.synth = new Tone.Synth().toDestination();
  }

  play(note) {
    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("C4", "8n");
  }
}