//charsLimit set tweet character limit, can be changed accordingly.
const charsLimit = 140;

$(document).ready(function() {
  $('#tweet-text').on('input', function() {
    let tweetLength = charsLimit - $(this).val().length;
    let remainingChars =  $(this).siblings().find('output');
    remainingChars.val(tweetLength);

    if (tweetLength < 0) {
      remainingChars.addClass('invalid');
    } else if (tweetLength >= 0) {
      remainingChars.removeClass('invalid');
    }

  });
});