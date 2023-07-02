document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides();
  
    function showSlides() {
      let slides = document.getElementsByClassName("slide");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 2000); // Change slide every 2 seconds
    }
  
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
  
    prevButton.addEventListener("click", function() {
      slideIndex--;
      if (slideIndex < 1) {
        slideIndex = slides.length;
      }
      showSlides();
    });
  
    nextButton.addEventListener("click", function() {
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      showSlides();
    });
  });