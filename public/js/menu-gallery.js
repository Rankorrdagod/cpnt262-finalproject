fetch("/api/galleries")
	.then((response) => response.json())
	.then((data) => {
		const container = document.querySelector(".container");
		for (let index = 0; index < data.length; index++) {
			const element = data[index];
			const newElement = document.createElement("img");
			newElement.setAttribute(
				"src",
				"/" + element.imageSrc.replace("public/", "")
			);
			newElement.classList.add("gallery-image");
			container.appendChild(newElement);
		}
	});
console.log("hello");
