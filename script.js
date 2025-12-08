// script.js - Mobile & Tablet Navigation Fixes

// Select the menu button (we’ll add it to HTML) and the nav menu
const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("nav ul");

// Toggle mobile menu visibility
if (menuButton) {
  menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("show"); // toggles visibility
  });
}

// Optional: adjust font sizes dynamically for extra large tablets
function adjustFontSize() {
  const width = window.innerWidth;

  // Extra large text for tablets
  if (width >= 601 && width <= 1024) {
    document.body.style.fontSize = "1.5rem"; // bigger font for tablet
    const headings = document.querySelectorAll("h2, h3");
    headings.forEach(h => h.style.fontSize = "2.2rem"); // bigger headings
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(a => a.style.fontSize = "1.5rem"); // bigger nav text
  } else if (width <= 600) {
    document.body.style.fontSize = "1.3rem"; // mobile font
    const headings = document.querySelectorAll("h2, h3");
    headings.forEach(h => h.style.fontSize = "1.8rem");
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(a => a.style.fontSize = "1.2rem");
  } else {
    document.body.style.fontSize = "1.2rem"; // desktop font
    const headings = document.querySelectorAll("h2, h3");
    headings.forEach(h => h.style.fontSize = "2rem");
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(a => a.style.fontSize = "1rem");
  }
}

// Run once on load
adjustFontSize();

// Run on window resize
window.addEventListener("resize", adjustFontSize);

console.log("script.js loaded - mobile menu and tablet font fixes active!");
