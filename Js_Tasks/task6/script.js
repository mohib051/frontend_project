var home = document.querySelector('#home');
var about = document.querySelector('#about');
var contact = document.querySelector('#contact');
var hometext = document.querySelector('#hometext');
var abouttext = document.querySelector('#abouttext');
var contacttext = document.querySelector('#contacttext');
hometext.style.display = "block";
hometext.style.width = "50%";
home.addEventListener("click", function () {
    saartexthatao();
    hometext.style.display = "block";
    hometext.style.width = "50%";
})
I
about.addEventListener("click", function () {
    saartexthatao();
    abouttext.style.display = "block";
    abouttext.style.width = "50%";
})
contact.addEventListener("click", function () {
    saartexthatao();
    contacttext.style.display = "block";
    contacttext.style.width = "50%";
})
function saartexthatao() {
    document.querySelectorAll("h3").forEach(function (h3){
        h3.style.display = "none";
    })
}

























var divs = document.querySelectorAll('.tab');
var texts = document.querySelectorAll('h3');
texts[0].style.display = "block";
exts[0].style.width = "50%";
S
divs.forEach(function (div, index) {
    div.addEventListener("click", function () {
        hideAllText();
        texts[index].style.display = "block";
        texts[index].style.width = "50%";
    });
});
function hideAllText() {
    texts.forEach(function (text) {
        text.style.display = "none";
    });
}   