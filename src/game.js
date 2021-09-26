import UI from './ui'
import Piano from './piano'
import Audio from './audio'
import MidiInput from './midi_input'
import KbInput from './kb_input'
import Note from './note'

export default class Game {
  constructor() {
    this.ui = new UI();
    this.piano = new Piano();
    this.audio = new Audio();
    this.midiInput = new MidiInput(this.onNotePlayed.bind(this),
                                   this.onNoteReleased.bind(this));
    this.kbInput = new KbInput(this.onNotePlayed.bind(this),
                               this.onNoteReleased.bind(this));

  }

  start() {
    console.log("starting new game")
    this.vidas = 3;
    this.pontos = 0;
    this.ui.clear();
    this.step();
    this.draw();
  }

  step() {
    const notas = [60, 62, 64, 65, 67];
    const midicode = notas[Math.floor(Math.random() * notas.length)];
    this.note = Note.fromMidiCode(midicode)
  }

  draw() {
    this.ui.pontos(this.pontos);
    this.ui.vidas(this.vidas)
    this.ui.pentagrama(this.note.midiCode);
  }

  onNotePlayed(note) {
    if (!(note.midiCode >= 60 && note.midiCode <= 71)) {
      return;
    }

    if(this.vidas == 0) return;
    
    var acertou = (note.midiCode == this.note.midiCode);
    
    if(acertou) {
      this.piano.play(note);
      this.pontos = this.pontos + 1
      this.step();
    } else {
      this.piano.playError();
      this.vidas = this.vidas - 1;
      this.checkGameOver();
    }
    this.ui.nota(note.noteName, acertou);
    
    this.draw();
  }

  onNoteReleased() {
  }

  checkGameOver() {
    if(this.vidas == 0) {
      this.ui.gameOver();
    }
  }

}