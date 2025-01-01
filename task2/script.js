
let fonts = document.getElementById('font');
let size = document.getElementById('size');
let italic = document.getElementById('italic');
let bold = document.getElementById('bold');
let underline = document.getElementById('under');
let text = document.getElementById('text');


fonts.onchange = function () {
    text.style.fontFamily = fonts.value;
};


size.onchange = function () {
    text.style.fontSize = size.value;
};


italic.onchange = function () {
    text.style.fontStyle = italic.checked ? "italic" : "normal";
};


bold.onchange = function () {
    text.style.fontWeight = bold.checked ? "bold" : "normal";
};


underline.onchange = function () {
    text.style.textDecoration = underline.checked ? "underline" : "none";
};