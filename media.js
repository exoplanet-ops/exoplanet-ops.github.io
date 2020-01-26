var bg = document.getElementById("bgroup");

function medCheck(x) {
  if (x.matches) { // If media query matches
    bgroup.classList.add("btn-group-vertical");
    bgroup.classList.remove("btn-group");
  } else {
    bgroup.classList.remove("btn-group-vertical");
    bgroup.classList.add("btn-group");
  }
}

var x = window.matchMedia("(max-width: 768px)")
medCheck(x) // Call listener function at run time
x.addListener(medCheck) // Attach listener function on state changes
