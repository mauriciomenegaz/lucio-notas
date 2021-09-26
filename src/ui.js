export default class UI {
  constructor() {
    
  }

  clear() {
    this.note('');
  }

  score(p) {
    document.getElementById('score').innerHTML = p;
  }

  lives(v) {
    document.getElementById('lives').innerHTML = v;
  }

  note(noteName, isCorrect) {
    document.getElementById('note').innerHTML = noteName;
    document.getElementById('note').classList.toggle('right', isCorrect);
    document.getElementById('note').classList.toggle('wrong', !isCorrect);

    setTimeout(() => { document.getElementById('note').innerHTML = '' }, 
               500);
  }

  gameOver() {
    setTimeout(() => { document.getElementById('note').innerHTML = 'GAME OVER' }, 
               501);
  }

  pentagram(note) {
    var c = document.getElementById("penta");
    var ctx = c.getContext("2d");
    
    ctx.beginPath();
    var img = document.getElementById("trebleClef");
    ctx.drawImage(img, 10, 35);
  
    var x = 120;
    var y;
    switch(note) {
      case 60: // C
        y = 212;
        break;
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

    const l = r + 6

    if(note <= 60) {
      ctx.beginPath();
      ctx.moveTo(x - l, y - 1);
      ctx.lineTo(x + l, y - 1);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x - l, y);
      ctx.lineTo(x + l, y);
      ctx.stroke();
    }
  }

  
}