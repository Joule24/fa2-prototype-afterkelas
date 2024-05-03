document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const role = document.getElementById("role").value;
    let redirectUrl = ''; // Initialize redirect URL variable

    // Set the redirect URL based on the selected role
    if (role === 'staff') {
        redirectUrl = 'staffhome.html'; // Set staff login URL
    } else if (role === 'student') {
        redirectUrl = 'Home.html'; // Set student login URL
    }

    // Update the href attribute of the sign-in button
    document.getElementById("login-button").setAttribute("href", redirectUrl);

    // Redirect to the selected role's homepage
    if (redirectUrl !== '') {
        window.location.href = redirectUrl;
    }
});
