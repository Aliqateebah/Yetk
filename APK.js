
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'password') {
        document.getElementById('status').innerHTML = 'Login successful!';
    } else {
        document.getElementById('status').innerHTML = 'Login failed. Please try again.';
    }
});
