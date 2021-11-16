"use strict";

let output = "";
const team = document.querySelector(".team");
fetch("https://cpnt262-finalapp.herokuapp.com/api/members")
	.then(function (response) {
		if (!response.ok) {
			throw new Error("Not 200 OK");
		}
		return response.json();
	})
	.then(function (data) {
		console.log(data);
		data.forEach(function (team) {
			console.log();
			output += `<li> 
            Name:${team.name} <a href="${team.github}">
            <img src="${team.profilePic}" alt="GitHub" ></a>
            ${team.bio}.
            </li>`;
		});
		team.innerHTML = `<ul>${output}</ul>`;
	});
