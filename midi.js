console.log("hello world" )

if (navigator.requestMIDIAccess) {
  console.log('This browser supports WebMIDI!');
} else {
  console.log('WebMIDI is not supported in this browser.');
}

navigator.requestMIDIAccess()
    .then(onMIDISuccess, onMIDIFailure);

function onMIDISuccess(midiAccess) {
  console.log(midiAccess);

  var inputs = midiAccess.inputs;
  var outputs = midiAccess.outputs;

  console.log(inputs);

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
      case 144: // noteOn
          if (velocity > 0) {
              noteOn(note, velocity);
          } else {
              noteOff(note);
          }
          break;
      case 128: // noteOff
          noteOff(note);
          break;
      // we could easily expand this switch statement to cover other types of commands such as controllers or sysex
  }
}

function noteOn(note) {
  const noteNames = ["Do", "", "Re", "", "Mi", "Fa", "", "Sol", "", "La", "", "Si"];
  if(note >= 60 && note <= 71) {
    noteName = noteNames[note - 60];
    console.log("ON " + noteName);
    document.getElementById('noteName').innerHTML = noteName;
  }
  
}

// Function to handle noteOff messages (ie. key is released)
// Think of this like an 'onkeyup' event
function noteOff(note) {
  document.getElementById('noteName').innerHTML = "";
}
