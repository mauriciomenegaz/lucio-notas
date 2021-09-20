export default class UI {
  constructor() {
    
  }

  clear() {
    this.nota('');
  }

  pontos(p) {
    document.getElementById('pontos').innerHTML = p;
  }

  vidas(v) {
    document.getElementById('vidas').innerHTML = v;
  }

  nota(noteName, isCorrect) {
    document.getElementById('nota').innerHTML = noteName;
    document.getElementById('nota').classList.toggle('right', isCorrect);
    document.getElementById('nota').classList.toggle('wrong', !isCorrect);
  }

  gameover() {
    document.getElementById('nota').innerHTML = 'GAME OVER';
  }

  pentagrama(note) {
    var c = document.getElementById("penta");
    var ctx = c.getContext("2d");
    
    ctx.beginPath();
    var img = document.getElementById("trebleClef");
    ctx.drawImage(img, 10, 35);
  
    var x = 120;
    var y;
    switch(note) {
      case 62: // D
        y = 202;
        break;
      case 64: // E
        y = 192;
        break;
      case 65: // F
        y = 180;
        break;
      case 67: // G
        y = 170;
    }
    
    const r = 10;
    
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'green';
    ctx.fill();
  }

  
}