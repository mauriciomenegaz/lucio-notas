import UI from './ui'
import Piano from './piano'
import Audio from './audio'
import MidiInput from './midi_input'
import KbInput from './kb_input'
import Note from './note'
import Settings from './settings'

export default class Game {
  constructor() {
    this.ui = new UI();
    this.piano = new Piano();
    this.audio = new Audio();
    this.midiInput = new MidiInput(this.onNotePlayed.bind(this),
                                   this.onNoteReleased.bind(this));
    this.kbInput = new KbInput(this.onNotePlayed.bind(this),
                               this.onNoteReleased.bind(this));
    this.settings = new Settings();
  }

  start() {
    console.log("starting new game")
    this.lives = 3;
    this.score = 0;
    this.stepNumber = 0;
    this.ui.clear();
    this.step();
    this.draw();
  }

  step() {
    var midiCode;

    if(this.settings.noteMode == 'random') {
      const notas = [60, 62, 64, 65, 67];
      midiCode = notas[Math.floor(Math.random() * notas.length)];
    } else {
      const notas = [62, 62, 64, 62];
      midiCode = notas[this.stepNumber];
    }
    this.note = Note.fromMidiCode(midiCode)
    this.stepNumber = this.stepNumber + 1;
  }

  draw() {
    this.ui.score(this.score);
    this.ui.lives(this.lives)
    this.ui.pentagram(this.note.midiCode);
  }

  onNotePlayed(note) {
    if (!(note.midiCode >= 60 && note.midiCode <= 71)) {
      return;
    }

    if(this.lives == 0) return;
    
    var isCorrect = (note.midiCode == this.note.midiCode);
    
    if(isCorrect) {
      this.piano.play(note);
      this.score = this.score + 1
      this.step();
    } else {
      this.piano.playError();
      this.lives = this.lives - 1;
      this.checkGameOver();
    }
    this.ui.note(note.noteName, isCorrect);
    
    this.draw();
  }

  onNoteReleased() {
  }

  checkGameOver() {
    if(this.lives == 0) {
      this.ui.gameOver();
    }
  }

}