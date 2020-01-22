var gg = document.getElementById("gasGiantButton");
var nl = document.getElementById("neptuneLikeButton");
var se = document.getElementById("superEarthButton");
var tr = document.getElementById("terrestrialButton");
var uk = document.getElementById("unknownButton");
var al = document.getElementById("allButton");

var buttons = [gg, nl, se, tr, uk, al]

console.log("Connected");

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function () {
		toggleAll();
		this.classList.toggle("active");
	});
}

function toggleAll() {
gg.classList.remove("active");
nl.classList.remove("active");
se.classList.remove("active");
tr.classList.remove("active");
uk.classList.remove("active");
al.classList.remove("active")
}