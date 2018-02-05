const menu = document.getElementsByClassName('wrapper-dropdown');

for (let i = 0; i < menu.length; i++) {
  menu[i].onclick = () => {
    menu[i].classList.toggle('active');
  }
}
