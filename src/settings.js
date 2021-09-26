export default class Settings {
  get noteMode() {
    return this.getVal('noteMode', 'random')
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