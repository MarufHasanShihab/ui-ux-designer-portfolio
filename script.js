const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
  header.classList.toggle ("sticky", window.scrollY> 120);
})



let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navlist');

menu.onclick = () =>{
  menu.classList.toggle('bx-x')
  navlist.classList.toggle('active')
}

window.onscroll = () =>{
  menu.classList.remove('bx-x')
  navlist.classList.remove('active')
}