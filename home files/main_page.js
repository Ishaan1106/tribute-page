document.addEventListener("DOMContentLoaded", function() {
  const quote = '"A dream is not that which you see while sleeping, it is something that does not let you sleep."';
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");

  let index = 0;
  let typingTimer;
  let colors = ["#c0ff14", "#c0ff14", "#c0ff14"]; // Specify the colors you want to use

  function typeQuote() {
    if (index < quote.length) {
      quoteElement.innerHTML += `<span style="color: ${colors[index % colors.length]}">${quote.charAt(index)}</span>`;
      index++;
      typingTimer = setTimeout(typeQuote, 50);
    } else {
      clearInterval(typingTimer);
    }
  }

  typeQuote();
  authorElement.style.fontSize = "14px"; // Adjust the font size as desired
});

document.addEventListener("DOMContentLoaded", function() {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Check if the user has a preferred theme set
  const userPreferredTheme = localStorage.getItem("preferred-theme");
  if (userPreferredTheme) {
    body.classList.add(userPreferredTheme);
  }

  // Toggle theme when button is clicked
  themeToggle.addEventListener("click", function() {
    body.classList.toggle("dark-mode");
    body.classList.remove("random-mode"); // Remove random mode class

    // Store user's preferred theme in local storage
    const currentTheme = body.classList.contains("dark-mode") ? "dark-mode" : "";
    localStorage.setItem("preferred-theme", currentTheme);
  });
});