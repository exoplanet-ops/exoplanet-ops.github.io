var pl = document.getElementById("pageLoader");

function loseLoad() {
  pl.style.display = "none";
}

window.setTimeout("loseLoad();", 5000);
