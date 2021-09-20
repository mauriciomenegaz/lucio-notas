// versao inicial (com tudo junto)

var jogo = {
  vidas: 3,
  nota: 64,
  pontos: 0
}

function jogoInit() {
  jogo.vidas = 3;
  jogo.pontos = 0;
  document.getElementById('nota').innerHTML = '';
  jogoStep();
  jogoDraw();
 }

function jogoStep() {
  const notas = [62, 64, 65, 67];
  jogo.nota = notas[Math.floor(Math.random() * notas.length)];
}

function jogoDraw() {
  document.getElementById('pontos').innerHTML = jogo.pontos;
  document.getElementById('vidas').innerHTML = jogo.vidas;
  drawNote(jogo.nota);
}

function jogoNota(nota, nome) {
  if(jogo.vidas == 0) return;
  document.getElementById('nota').innerHTML = nome;
  var acertou = (nota == jogo.nota);
  if(acertou) {
    audioNoteOn(nota);
    //setTimeout(function() { audioNoteOff() }, 100)
    jogo.pontos = jogo.pontos + 1
    jogoStep();
  } else {
    document.getElementById('errorAudio').play();
    jogo.vidas = jogo.vidas - 1;
    jogoCheckGameOver();
  }
  document.getElementById('nota').classList.toggle('right', acertou);
  document.getElementById('nota').classList.toggle('wrong', !acertou);
  jogoDraw();
}

function jogoCheckGameOver() {
  if(jogo.vidas == 0) {
    document.getElementById('nota').innerHTML = 'GAME OVER';
  }
}

//////////////////

var osc;
var audioCtx;
var amp;

function audioInit(){
  audioCtx = new AudioContext();
  osc = audioCtx.createOscillator();
  osc.type = 'sine';
  
  amp = audioCtx.createGain();
  osc.connect(amp);
  amp.connect(audioCtx.destination);
  amp.gain.value = 0;
  osc.start();
}

function audioNoteOn(note) {
  console.log("audio note on")
  var freq = 440 * Math.pow(2, (note - 69) / 12)
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
  amp.gain.value = 1;
}

function audioNoteOff() {
  amp.gain.value = 0;
}


//////////////////


if (navigator.requestMIDIAccess) {
  console.log('This browser supports WebMIDI!');
} else {
  console.log('WebMIDI is not supported in this browser.');
}

navigator.requestMIDIAccess()
  .then(onMIDISuccess, onMIDIFailure);

function onMIDISuccess(midiAccess) {
  var inputs = midiAccess.inputs;
  var outputs = midiAccess.outputs;

  for (var input of midiAccess.inputs.values()) {
    input.onmidimessage = getMIDIMessage;
  }
}

function onMIDIFailure() {
    console.log('Could not access your MIDI devices.');
}

function getMIDIMessage(message) {
  var command = message.data[0];
  var note = message.data[1];
  var velocity = (message.data.length > 2) ? message.data[2] : 0; // a velocity value might not be included with a noteOff command

  switch (command) {
    case 144:
      noteOn(note);
      break;
    case 128:
      noteOff(note);
      break;
  }
}

function noteOn(note) {
  const noteNames = ["Do", "", "Re", "", "Mi", "Fa", "", "Sol", "", "La", "", "Si"];
  if(note >= 60 && note <= 71) {
    var noteName = noteNames[note - 60];
    jogoNota(note, noteName);  
  }
  
}

function noteOff(note) {
  audioNoteOff();
  if(jogo.vidas == 0) return;
  setTimeout(function() { document.getElementById('nota').innerHTML = ""; }, 
             500);
}


////////////////////////

function drawNote(note) {
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
  
  r = 10;
  
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'green';
  ctx.fill();
}

window.addEventListener('load', (event) => {
  //jogoInit();
  //drawNote(67);
 
});

