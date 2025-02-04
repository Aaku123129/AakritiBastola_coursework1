document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can add more complex validation if needed)
    if (email && password) {
        // Redirect to the home page
        window.location.href = 'home page.html'; // Replace 'home.html' with the actual path to your home page
    } else {
        alert('Please enter both email/username and password.');
    }
});