// Initialize the starting positions for the background
let xPos = 0;
let yPos = 0;

// Speed of scrolling (adjust these for faster/slower scrolling)
const scrollSpeedX = 0.2; // Horizontal speed
const scrollSpeedY = 0.1; // Vertical speed

function scrollBackground() {
    // Update positions
    xPos += scrollSpeedX;
    yPos += scrollSpeedY;

    // Apply the new background position
    document.body.style.backgroundPosition = `${xPos}px ${yPos}px`;

    // Keep the animation running
    requestAnimationFrame(scrollBackground);
}

// Start the scrolling
scrollBackground();