// Check for saved user preference, if any, on load of the website
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // Check if user preference is stored
    const darkMode = localStorage.getItem('darkMode');
    
    // Set initial theme
    if (darkMode === 'enabled') {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkModeToggle.checked = true;
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        darkModeToggle.checked = false;
    }

    // Listen for toggle changes
    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
}); 