"use strict";

window.addEventListener("load", () => {
	const theNumberId = "the-number";
	const theRateId = "the-rate";
	const increaseRateId = "increase-rate-button";
	const increaseRateLabelId = "increase-rate-label";

	const numberh2 = document.getElementById(theNumberId);
	const rateh2 = document.getElementById(theRateId);
	const increaseRateButton = document.getElementById(increaseRateId);
	const increaseRateLabel = document.getElementById(increaseRateLabelId);

	let number = 0;
	let rate = 1;

	let baseRate = 1;
	let increaseRateAmount = 1;
	let increaseRateCost = 10;
	let increaseRateCostMult = 1.4;
	let increaseRateCount = 0;

	increaseRateButton.disabled = true;
	increaseRateButton.addEventListener("click", () => {
		if (number < increaseRateCost) {
			increaseRateButton.disabled = true;
			return;
		}
		number -= increaseRateCost;
		increaseRateCost = Math.floor(increaseRateCost * increaseRateCostMult);
		increaseRateCount += 1;
		rate = baseRate + (increaseRateCount * increaseRateAmount);

		updateAllTheHtml();
	});

	function updateAllTheHtml() {
		increaseRateLabel.textContent = `Cost: ${increaseRateCost}`;
		increaseRateButton.textContent = `+${increaseRateAmount}`;
		rateh2.textContent = `${rate}`;
		numberh2.textContent = number;
		increaseRateButton.disabled = number < increaseRateCost ? true : false;
	}

	function run() {
		number += rate;

		updateAllTheHtml();

		setTimeout(run, 1000);
	}

	setTimeout(run, 1000);
});