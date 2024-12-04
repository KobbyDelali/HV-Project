function move() {
    const word = document.getElementById('pass').value;

    if(word = "Password") {
        window.location.href = 'homepage.html';
    } else {
        alert('Wrong password');
    }
}