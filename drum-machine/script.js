const btns = document.getElementsByClassName('drum-kit__drum');
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = () => {
    const player = btns[i].getElementsByTagName('audio');
    btns[i].onclick = () => {
      player[0].play();
    }
  }
}
