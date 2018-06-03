"use strict";

window.addEventListener("load", () => {
	const beginYear = 2018;
	const footerElement = document.getElementById("footer");
	const curYear = new Date().getFullYear();
	if (curYear == beginYear) {
		footerElement.textContent += ` Copyright \u00A9 ${new Date().getFullYear()} Kostyantyn Proskuryakov.`;
	} else {
		footerElement.textContent += ` Copyright \u00A9 ${beginYear} - ${new Date().getFullYear()} Kostyantyn Proskuryakov.`;
	}
});
