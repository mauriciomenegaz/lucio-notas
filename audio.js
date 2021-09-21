export default class Audio {
  play(audioDomId) {
    console.log('play ' + audioDomId)
    document.getElementById(audioDomId).play()
                                       .then(() => { console.log('resolved')}, 
                                             () => { console.log('rejected')})
                                       .catch(err => { console.log(err) });
  }
}