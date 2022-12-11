$(document).ready(function() {
  $("form").on("submit", formSubmission);
  $(".caption").on("click", composeTweet);
  $(".scrollToTop").on("click", scrollCompose);
  loadTweets();
});


const escapeTweet = function (tweetText) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(tweetText));
  return div.innerHTML;
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


const createTweetElement = function(tweetData) {
  const $tweet = $(`
  <article class="tweet">

        <header> 
          <div class ="avatar">
            <img src="${tweetData.user.avatars}" alt="avatar">
            <p>${tweetData.user.name}</p>
          </div>
          <p class="tweeter-handle">${tweetData.user.handle}</p>
        </header>
        <body>
        <p>${escapeTweet(tweetData.content.text)}</p>
        <hr/>
        </body>
        <footer >
          <p class ="date">${timeago.format(tweetData.created_at)}</p>
          <div class="tweet-nav">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
          </div>
        </footer >

      </article>`
  );

  return $tweet;

};



//Render each tweet
const renderTweets = function(tweets) {
  const $container = $("#tweets-container").empty();
  for (const item of tweets) {
    const $tweet = createTweetElement(item);
    $container.prepend($tweet);
  }
};

// Fetching tweets from database and calling render func
const loadTweets = function() {
  $.get("/tweets")
    .then(data => {
      renderTweets(data);
    });
};




// Submit the form
const formSubmission = function() {
  event.preventDefault();

  const $tweetData = $(this).find("textarea")
  const $errorBox = $("#error-box");
  const $error = $('#error-message');



  //validating the tweet for appropriate length
  if ($tweetData.val().length === 0) {
    $error.text("Your tweet can't be empty!")
    $errorBox.slideDown("slow");
    // $error.delay(5000).slideUp("slow");
    return;
  }

  if ($tweetData.val().length > 140) {
    $error.text("Tweet can't be longer than 140 characters!");
    $errorBox.slideDown("slow");
    // $('#wrong-count').delay(5000).slideUp("slow");
    return;
  }

  if ($errorBox.is(":visible")) {
    $errorBox.slideUp("fast");
  }
  
  const data = $(this).serialize();
  $.post("/tweets", data)
    .then(function() {
      $tweetData.val("");
      $tweetData.trigger("input");
      loadTweets();
    })
  };

