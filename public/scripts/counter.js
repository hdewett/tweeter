$(document).ready(function() {
  $('#tweet-text').on('input', tweetCharCounter);
});

const tweetCharCounter = function() {
  let remainingChars = 140 - $(this).val().length;
  let tweetLength =  $(this).siblings().find('output');
  tweetLength.text(remainingChars);

  if (remainingChars < 0) {
    tweetLength.addClass('form-invalid');
  } else {
    tweetLength.removeClass('form-invalid');
  }
};
