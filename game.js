import UI from './ui'
import Piano from './piano'
import Audio from './audio'

export default class Game {
  constructor() {
    console.log("running game constructor")
    this.ui = new UI();
    this.piano = new Piano();
    this.audio = new Audio();
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
    const notas = [62, 64, 65, 67];
    this.note = notas[Math.floor(Math.random() * notas.length)];
  }

  draw() {
    this.ui.pontos(this.pontos);
    this.ui.vidas(this.vidas)
    this.ui.pentagrama(this.note);
  }

  onNotePlayed(note, noteName) {
    if(this.vidas == 0) return;
    
    var acertou = (note == this.note);
    if(acertou) {
      this.piano.play(note);
      this.pontos = this.pontos + 1
      this.step();
    } else {
      this.audio.play('errorAudio')
      this.vidas = this.vidas - 1;
      this.checkGameOver();
    }
    this.ui.nota(noteName, acertou);
    
    this.draw();
  }

  checkGameOver() {
    if(this.vidas == 0) {
      this.ui.gameOver();
    }
  }

}