document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form from refreshing the page

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Hardcoded credentials for simulation
            const correctUsername = 'admin';
            const correctPassword = 'password123';

            // Simulating login validation
            if (username === correctUsername && password === correctPassword) {
                // Redirect to a new page if login is successful
                window.location.href = '/dashboard.html';
            } else {
                // Display error message if login fails
                document.getElementById('login-error').textContent = 'Invalid username or password';
            }
        });
