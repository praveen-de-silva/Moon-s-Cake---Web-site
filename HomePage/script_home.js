// Get the h1 element
const textElement = document.getElementById("changing-text");

// Define text options
const texts = ["Welcome !", "Taste your imagine cake ..."];
let index = 0;

// Function to change text every 5 seconds
setInterval(() => {
    textElement.style.opacity = 0; // Fade out effect

    setTimeout(() => {
        index = (index + 1) % texts.length; // Toggle between 0 and 1
        textElement.textContent = texts[index]; // Change text
        textElement.style.opacity = 1; // Fade in effect
    }, 500); // Wait for fade-out before changing text
}, 4000);
