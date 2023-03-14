// ---------------------------------------------------------------------------

let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 85) {
    header.classList.add("bgNav");
  } else if (window.scrollY < 85) {
    header.classList.remove("bgNav");
  }
});


// ---------------------------------------------------------------------------

let menu = document.querySelector(".menu");
let mainList = document.querySelector(".main");
let li = Array.from(document.querySelectorAll(".main li a"));

menu.addEventListener("click", () => {
  mainList.classList.toggle("done");
  setTimeout(() => {
    if (mainList.classList.contains("opacityOne")) {
      mainList.classList.remove("opacityOne");
    } else {
      mainList.classList.add("opacityOne");
    }
  }, 100);
});

li.forEach((elem) => {
  elem.addEventListener("click", () => {
    mainList.classList.remove("done");
    mainList.classList.remove("opacityOne");
  });
});

// --------------------------------------------------------------------------


