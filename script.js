const names = [
    "The Missile Man",
    "A Visionary Leader",
    "An Inspiration to All",
    "Dr. APJ Abdul Kalam"
  ];
  let index = 0;
  const nameElement = document.querySelector('.name');
  
  function shuffleText() {
    nameElement.textContent = names[index];
    index = (index + 1) % names.length;
  }
  
  shuffleText(); // Initial text
  setInterval(shuffleText, 1990); // Change text every 3 seconds

  function redirectToTributePage() {
    window.location.href = "thanks_page.html";
  }

  // Scroll to top when arrow image is clicked
document.getElementById("arrow-link").addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });


  