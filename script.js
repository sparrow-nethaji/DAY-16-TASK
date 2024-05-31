function countdown() {
    var countdownElement = document.getElementById('countdown');

    var count = 10;
    var timer = setInterval(function() {
        if (count <= 0) {
            clearInterval(timer);
            countdownElement.textContent = "Happy Independence Day!";
        } else {
            countdownElement.textContent = count;
            count--;
        }
    }, 1000);
}

countdown();
