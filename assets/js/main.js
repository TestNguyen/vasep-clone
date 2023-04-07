// let images = [
//   "./assets/img/middle-banner1.png",
//   "./assets/img/middle-banner2.png",
//   "./assets/img/middle-banner3.png",
// ];

// let index = 0;
// const imgElement = document.querySelector("#mainPhoto");

// function change() {
//   imgElement.src = images[index];
//   index > 1 ? (index = 0) : index++;
// }

// window.onload = function () {
//   setInterval(change, 1000);
// };

// --------------fixed navbar------------

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 250) {
      document.getElementById("navbarTop").classList.add("fixed-top");
      // add padding top to show content behind navbar
    } else {
      document.getElementById("navbarTop").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});


