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


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navHeader").style.paddingTop = "10px";
    document.getElementById("navHeader").style.paddingBottom = "10px";
    document.getElementById("title").style.marginTop = "0px";
  } else {
    document.getElementById("navHeader").style.paddingTop = "48px";
    document.getElementById("navHeader").style.paddingBottom = "48px";
    document.getElementById("title").style.marginTop = "20px";
  }
}
