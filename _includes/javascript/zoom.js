/*
 * zoom in/zoom_out
 */
var body = document.querySelector(".markdown-body");

function changeFontSize(resize) {
 var computedFontSize = window.getComputedStyle(body).fontSize;
 var fontSize = parseInt(computedFontSize,10);
 body.style.fontSize = (fontSize + resize) + 'px';
}

document.querySelector('#zoom_in').addEventListener('click', function() {
 changeFontSize(+1);
});

document.querySelector('#zoom_out').addEventListener('click', function() {
 changeFontSize(-1);
});
