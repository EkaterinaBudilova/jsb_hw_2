const mediaplayer = document.getElementsByClassName('mediaplayer');
const audio = document.getElementsByTagName('audio');
const playPauseBtn = document.getElementsByClassName('playstate');
const stopBtn = document.getElementsByClassName('stop');
const backBtn = document.getElementsByClassName('back');
playPauseBtn[0].onclick = () => {
  let state = playPauseBtn[0].getElementsByTagName('i');
  if (state[0].classList.contains('fa-play')) {
    audio[0].play();
    mediaplayer[0].classList.toggle('play');
    state[0].classList.toggle('fa-play');
    state[0].classList.toggle('fa-pause');
    console.log('fa-pause');
  } else if (state[0].classList.contains('fa-pause')) {
    audio[0].pause();
    mediaplayer[0].classList.toggle('play');
    state[0].classList.toggle('fa-play');
    state[0].classList.toggle('fa-pause');
  }

}
stopBtn[0].onclick = () => {
  
    audio[0].pause();
    mediaplayer[0].classList.toggle('play');
  
  audio.currentTime = 0;
  
  
  
}
backBtn[0].onclick = () => {
  audio[0].pause();
  audio.currentTime = 0; 
}