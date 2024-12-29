/* $("button").click(function () {
  $('html,body').animate({
    scrollTop: $(".second").offset().top
  },
    'slow');
}); */

function gotoContent1() {
  /* var element = document.getElementById("route");
  element.classList.add("intro"); */
  $('html,body').animate({
    scrollTop: $(".second").offset().top
  },
    'slow');
}
function gotoContent2() {
  $('html,body').animate({
    scrollTop: $(".content2").offset().top
  },
    'slow');
}
$(document).ready(function () {
  if(window.location.hash == '#destinations'){
    $('html,body').animate({
      scrollTop: $(".content2").offset().top
    },
      'slow');
  }
});

var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide() {

  if (index < 0) {
    index = slides.length - 1;
  }

  if (index > slides.length - 1) {
    index = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dot[i].classList.remove("active");
  }

  slides[index].style.display = "block";
  dot[index].classList.add("active");

  index++;

  setTimeout(changeSlide, 2000);

}

changeSlide();

