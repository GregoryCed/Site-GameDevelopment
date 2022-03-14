var slideIndexHome = 0;
showSlidesHome();

function showSlidesHome() {
  var i;
  var slidesHome = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slidesHome.length; i++) {
    slidesHome[i].style.display = "none";  
  }
  slideIndexHome++;
  if (slideIndexHome > slidesHome.length) {slideIndexHome = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slidesHome[slideIndexHome-1].style.display = "block";  
  dots[slideIndexHome-1].className += " active";
  setTimeout(showSlidesHome, 5000);
}