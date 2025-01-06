let btn =document.getElementById('toUp');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }

function goToUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}