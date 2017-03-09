var buttons = [
    document.getElementById('button__1'),
    document.getElementById('button__2'),
    document.getElementById('button__3'),
    document.getElementById('button__4')
];

var timer = 60;
var lives = 10;
var btnFlags = [ false, false, false, false ];
var delay = 1000;

buttons.forEach(button => {
    button.onclick = function () {
        if (button.style.visibility == 'visible') {
            button.style.visibility = 'hidden';
        }
    }
});

function showRandomButtonFor() {
    const pos = random(0, 4);
    if (btnFlags[pos])
        return;
    const button = buttons[pos];
    btnFlags[pos] = true;
    button.style.visibility = 'visible';
    setTimeout(function() {
        if (button.style.visibility == 'visible') {
            document.getElementsByClassName('live')[0].innerHTML = --lives + ' Lives';
            timer = 60;
            if (lives == 0) {
                clearInterval(buttonsClosure);
                document.getElementsByClassName('result')[0].innerHTML = 'You lost!';
                clearInterval(timerClosure);
            }
        }
        button.style.visibility = 'hidden';
        btnFlags[pos] = false;
    }, delay);
}

function random(minVal, maxVal) {
    return Math.round(Math.random() * (maxVal - minVal) + minVal);
}

var buttonsClosure = setInterval(showRandomButtonFor, 250);

var timerClosure = setInterval(() => {
    document.getElementsByClassName('result')[0].innerHTML = --timer;
    delay = 1000 - (100 * (60 - timer < 5 ? (60 - timer) : 5));
    if (timer == -1) {
        clearInterval(buttonsClosure);
        document.getElementsByClassName('result')[0].innerHTML = 'You won!';
        clearInterval(timerClosure);
    }
}, 1000);