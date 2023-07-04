
// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("slide");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 2000); // Change image every 2 seconds
// }

document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.slider img');
    var currentImage = 0;
    var slideInterval = setInterval(nextSlide, 2000);
  
    function nextSlide() {
      images[currentImage].className = '';
      currentImage = (currentImage + 1) % images.length;
      images[currentImage].className = 'active';
    }
  });
