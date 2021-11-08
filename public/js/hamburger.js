const navSlide = () => {
	const hamburger = document.querySelector(".hamburger");
	const nav = document.querySelector(".navlinks");
	const navlinks = document.querySelectorAll(".navlinks li");

	hamburger.addEventListener("click", () => {
		nav.classList.toggle("nav-active");

		navlinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navlinksFade 0.5s ease forwards ${
					index / 7 + 0.3
				}s`;
			}
		});
	});
};
navSlide();
