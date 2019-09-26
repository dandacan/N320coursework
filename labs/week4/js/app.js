var boxes = document.querySelector("#boxes");
var subheader = document.querySelector("#subheaderbox");
var title = document.querySelector(".title");

subheader.addEventListener("mousedown", subheadOff);
title.addEventListener("mousedown", titleOff);

for (i=0; i<2; i++){
	for (j=0; j<3; j++){
		let newbox = document.createElement("div");
		newbox.classList.add("box");


		newbox.addEventListener("mouseover", onBoxOver);
		newbox.addEventListener("mouseout", onBoxOut);
		newbox.addEventListener("mousedown", onBoxDown);

		boxes.appendChild(newbox);
	}
}
function onBoxOver(event) {
	event.target.classList.add("boxOver");
	event.target.classList.remove("boxOff");
}
function onBoxOut(event) {
	event.target.classList.remove("boxOver");
	event.target.classList.add("boxOff");
}
function onBoxDown(event) {
	event.target.classList.add("boxOut");
}
function subheadOff(event) {
	event.target.classList.add("subheadDown");
}
function titleOff(event) {
	event.target.classList.add("titleDown");
}