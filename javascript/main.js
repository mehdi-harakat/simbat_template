let upButton = document.querySelector("body .up-button");
let upButtonTwo = document.querySelector(".footer .up-button-two");

window.addEventListener("scroll", () => {
	if (scrollY > 550 && scrollY < 3250) {
		upButton.style.cssText = "opacity: 1; pointer-events: all;";
	} else {
		upButton.style.cssText = "opacity: 0; pointer-events: none;";
	}

	console.log(scrollY)
});

upButton.onclick = onKeyUp;
upButtonTwo.onclick = onKeyUp;

function onKeyUp() {
	setTimeout(() => {
		upButton.style.cssText = "opacity: 0; pointer-events: none;";
	}, 500);
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}

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

let serCards = document.querySelectorAll(".boxes .cards");

window.addEventListener("scroll", () => {
	if (scrollY > 500) {
		serCards.forEach((e, index) => {
      setTimeout(() => {
        e.style.opacity = '1';
        e.style.transform = "translate(0px, 0)";
			}, 200 * (index + 1));
		});
	}
});



//  ------------- BY EL MEHDI EL HARAKAT <3 <3 --------------------