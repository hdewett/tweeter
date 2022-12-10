$(document).ready(function() {
  $("form").on("submit", formSubmission);
  loadTweets();
});

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

        <p>${tweetData.content.text}</p>
        <hr/>

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
  //validating the tweet for appropriate length
  if ($tweetData.val().length === 0) {
    alert("Tweet can't be empty!");
    return;
  }

  if ($tweetData.val().length > 140) {
    alert("That's a little long! Keep it under 140")
    return;
  } 

  const data = $(this).serialize();
  $.post("/tweets", data)
    .then(function() {
      $tweetData.val("");
      $tweetData.trigger("input");
      loadTweets();
    })
  };