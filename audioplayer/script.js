const mediaplayer = document.getElementsByClassName('mediaplayer');
const audio = document.getElementsByTagName('audio');
const playPauseBtn = document.getElementsByClassName('playstate');
const stopBtn = document.getElementsByClassName('stop');
const backBtn = document.getElementsByClassName('back');
const nextBtn = document.getElementsByClassName('next');
const caption = document.getElementsByClassName('title');
const songs = ['mp3/LA Chill Tour.mp3', 'mp3/LA Fusion Jam.mp3', 'mp3/This is it band.mp3'];

let curSong = 0;
playPauseBtn[0].onclick = () => {
  let state = playPauseBtn[0].getElementsByTagName('i');
  console.log(state[0].classList);
  if (mediaplayer[0].classList.contains('play')) {
    audio[0].pause();
    mediaplayer[0].classList.toggle('play');
  } else {
    audio[0].play();
    mediaplayer[0].classList.toggle('play');
  }
}
 
stopBtn[0].onclick = () => {
  audio[0].pause();
  mediaplayer[0].classList.remove('play');
  audio[0].currentTime = 0;  
}

backBtn[0].onclick = () => {
  curSong--;
  if (curSong < 0) {
    curSong = songs.length - 1;
  }
  audio[0].src = songs[curSong];
  caption[0].title = songs[curSong].slice(4);
  audio[0].play();
}

nextBtn[0].onclick = () => {
  curSong++;
  if (curSong > songs.length - 1) {
    curSong = 0;
  }
  audio[0].src = songs[curSong];
  caption[0].title = songs[curSong].slice(4);
  audio[0].play();
}