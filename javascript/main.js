let menu = document.querySelector(".menu");
let mainList = document.querySelector(".main");
let li = Array.from(document.querySelectorAll(".main li a"));

menu.addEventListener("click", () => {
  mainList.classList.toggle("done");

  setTimeout(() => {
    if (mainList.getAttribute("style") === "opacity: 1;") {
      mainList.style.opacity = "0";
    } else {
      mainList.style.opacity = "1";
    }
  }, 100);
});

li.forEach((elem) => {
  elem.addEventListener("click", () => {
    mainList.classList.remove("done"),
    (mainList.style.opacity = "0");
  });
});
