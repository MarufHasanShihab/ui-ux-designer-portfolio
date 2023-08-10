const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
  header.classList.toggle ("sticky", window.scrollY> 120);
})