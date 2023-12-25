function Login(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === 'ilham' && password === 'password') {
        alert("Login Success");
        window.location.href = 'success.html'
    } else {
        alert("Login Failed!");
    }
}
    