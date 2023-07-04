

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
