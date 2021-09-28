import RandomSequencer from './sequencers/random_sequencer'
import SongSequencer from './sequencers/song_sequencer'
export default class Settings {
  get noteMode() {
    return this.getVal('noteMode', 'random')
  }

  createNoteSequencer() {
    if(this.noteMode == 'random') {
      return new RandomSequencer();
    } else {
      return new SongSequencer();
    }
  }

  getVal(key, defaultVal) {
    var v = localStorage.getItem(key);

    if (!v) {
      v = defaultVal;
      localStorage.setItem(key, v)
    }
    return v;
  }
}