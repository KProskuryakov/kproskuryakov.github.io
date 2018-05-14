window.addEventListener("load", () => {
	let footerElement = document.getElementById("footer");
	footerElement.textContent += ` Copyright \u00A9 ${new Date().getFullYear()} Kostyantyn Proskuryakov.`;
});