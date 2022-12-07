//charsLimit set tweet character limit, can be changed accordingly
const charsLimit = 140;

$(document).ready(function() {
  $('#tweet-text').on('input', function() {
    let remainingChars = charsLimit - $(this).val().length;
    let tweetLength =  $(this).siblings().find('output');
    tweetLength.val(remainingChars);

    if (remainingChars < 0) {
      tweetLength.addClass('invalid');
    } else {
      tweetLength.removeClass('invalid');
    }

  });
});