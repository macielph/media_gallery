function myNav() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

$(".grid-item").on("click", function() { // when item with class of button is clicked, fire function
  var modal = $(this).data("modal"); // sets modal var equal to data attribute
  $(modal).show(); // opens up modal (much code hidden here by jQuery)
});
$(".modal").on("click", function(e) { // sets up click function
  var className = e.target.className; // var className set to event target
  if(className === "modal" || className === "close"){ // if conditions are met...
    $(this).closest(".modal").hide(); // then hide the modal
  } // closes if-statement
}); // closes function
