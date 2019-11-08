const header = document.querySelector(".main-header");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
M.AutoInit();
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init({
    fullWidth: true
  });
  // instance = M.Carousel.init({

  //   });
});

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 4,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 750,
    autoplayHoverPause: true,
    animateOut: true,
    animateIn: true,
    loop: true,
    center: true,
    stagePadding: 20
    // nav: true
  });
});

const qepath = document.querySelector(".quote-engine-wrapper .first");
const qepathSecond = document.querySelector(".quote-engine-wrapper .second");
const qepathType = document.querySelector(".quote-engine-wrapper .type");
const qepathThird = document.querySelector(".quote-engine-wrapper .third");
const qepathFourth = document.querySelector(".quote-engine-wrapper .fourth");
const qepathLast = document.querySelector(".quote-engine-wrapper .last");
// let lists = document.querySelectorAll(".first-wrapper .first input");

const handleRadioClick = () => {
  qepath.classList.add("hide");
  qepathSecond.classList.remove("hide");
};

const handleSecond = () => {
  // e.preventDefault();
  qepathSecond.classList.add("hide");
  qepathType.classList.remove("hide");
};
const handleType = () => {
  qepathType.classList.add("hide");
  qepathThird.classList.remove("hide");
};
const handleThird = () => {
  qepathThird.classList.add("hide");
  qepathFourth.classList.remove("hide");
};
const handleFourth = () => {
  qepathFourth.classList.add("hide");
  qepathLast.classList.remove("hide");
};
