document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    try {
        const response = await fetch('/api/admin/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            // Redirect to dashboard if login is successful
            window.location.href = '/dashboard';
        } else {
            // Display error message if login fails
            document.getElementById('login-error').textContent = data.message;
        }
    } catch (error) {
        document.getElementById('login-error').textContent = 'An error occurred. Please try again later.';
    }
});
