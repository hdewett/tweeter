const scroller = document.querySelector(".scrollToTop");

window.onscroll = function () {
    if (window.scrollY >= 100) {
      scroller.classList.remove("hideElement");
    } else {
      scroller.classList.add("hideElement");
    }
};