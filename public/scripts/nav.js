$(document).ready(function() {
  $(".caption").on("click", composeTweet);
  $(".scrollToTop").on("click", scrollCompose);
  $(window).on("scroll", showScrollToTop);
});

const showScrollToTop = function () {
  const $scroller = $(".scrollToTop");
    if ($(window).scrollTop() >= 100) {
      $scroller.removeClass("hideElement");
    } else {
      $scroller.addClass("hideElement");
    }
};

const scrollCompose = function() {
  const $newTweet = $(".new-tweet");
  const $newTweetTextArea = $(".new-tweet textarea");
  $newTweet.slideDown("slow");
  $newTweetTextArea.focus();
}

const composeTweet = function(event) {
  const $newTweet = $(".new-tweet");
  const $newTweetTextArea = $(".new-tweet textarea");
  if ($newTweet.is(":visible")) {
    $newTweet.slideUp("slow");
  } else {
    $newTweet.slideDown("slow");
    $newTweetTextArea.focus();
  }
}
