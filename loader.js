var blocks = document.getElementsByClassName("planet-box");
var gg1 = document.getElementById("gasGiantButton");
var nl1 = document.getElementById("neptuneLikeButton");
var se1 = document.getElementById("superEarthButton");
var tr1 = document.getElementById("terrestrialButton");
var uk1 = document.getElementById("unknownButton");
var al1 = document.getElementById("allButton");

al1.addEventListener("click", function() {
	for (var i = 0; i < blocks.length; i++) {
		blocks[i].style.display="block";
	}
})

gg1.addEventListener("click", function() {
loadBlocks("gas-giant")
});
nl1.addEventListener("click", function() {
loadBlocks("neptune-like")
});
se1.addEventListener("click", function() {
loadBlocks("super-earth")
});
tr1.addEventListener("click", function() {
loadBlocks("terrestrial")
});
uk1.addEventListener("click", function() {
loadBlocks("unknown")
});


function loadBlocks(type) {
	for (var i = 0; i < blocks.length; i++) {
	console.log("Running Function");
		if(blocks[i].classList.contains(type)) {
			blocks[i].style.display="block";
		} else {
			blocks[i].style.display="none";
		}
	}
}