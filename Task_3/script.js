function changeColor(color) {
    document.body.style.backgroundColor = color;
    navigator.clipboard.writeText(color);
    var audio = new Audio('src_notify.mp3');
    audio.play();
}