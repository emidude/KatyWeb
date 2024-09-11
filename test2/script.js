// Function to handle burger menu toggle
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show'); // Toggle the 'show' class to display/hide the menu
}

// Add event listener for the burger menu
document.getElementById('burger').addEventListener('click', toggleMenu);

// Close the menu when resizing the window to larger viewports
window.addEventListener('resize', function() {
    const menu = document.getElementById('menu');
    if (window.innerWidth > 768) {
        menu.classList.remove('show'); // Ensure menu is closed in large viewports
    }
});
