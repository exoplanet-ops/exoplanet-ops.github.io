var modal = document.getElementById("modal-box");

// Get the button that opens the modal
var btn = document.getElementsByClassName("modal-trigger");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

for (var i = 0; i<btn.length; i++) {
  btn[i].addEventListener("click", function() {
    modal.style.display = "block";
  });
}

// When the user clicks on <span> (x), close the modal
span.addEventListener ("click", function() {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
