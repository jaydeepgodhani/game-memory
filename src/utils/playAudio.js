const playAudio = (speakerOn, audio) => {
  if(speakerOn) {
    audio.currentTime = 0
    audio.play()
  }
}

export default playAudio