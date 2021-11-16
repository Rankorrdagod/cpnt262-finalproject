fetch("/api/galleries")
	.then((response) => response.json())
	.then((data) => {
		const container = document.querySelector(".container");
		for (let index = 0; index < data.length; index++) {
			const element = data[index];

			const containerElement = document.createElement("div");
			containerElement.classList.add("gallery-container");

			const imageElement = document.createElement("img");
			imageElement.setAttribute(
				"src",
				"/" + element.imageSrc.replace("public/", "")
			);
			imageElement.classList.add("gallery-image");

			const titleElement = document.createElement("div");
			titleElement.classList.add("gallery-title");
			titleElement.innerHTML = element.title;

			containerElement.appendChild(imageElement);
			containerElement.appendChild(titleElement);

			container.appendChild(containerElement);
		}
	});
