const scroller = document.querySelector(".scrollToTop")

window.onscroll = function () {
    const top = window.scrollY

    if (top >= 100) {
      scroller.classList.add("showScrollToTop")
    } else {
      scroller.classList.remove("showScrollToTop")
    }
};