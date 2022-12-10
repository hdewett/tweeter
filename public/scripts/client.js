$(document).ready(function() {
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
  const $container = $("#tweets-container")
  for (const item of tweets) {
    const $tweet = createTweetElement(item);
    $container.append($tweet);
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
$(".new-tweet form").submit(function(event) {
  event.preventDefault();
  // Turns a set of form data into a query string
  const formData = ($(this).serialize());

  $.ajax({
    type: "POST",
    url: '/tweets',
    data: formData,
    success: function(data) {
      loadTweets(data);
    }
  });
});
