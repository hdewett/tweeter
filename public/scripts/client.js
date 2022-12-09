$(document).ready(function() {
  renderTweets(data);
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
  for (const item of tweets) {
    const $tweet = createTweetElement(item);
    $(`#tweets-container`).append($tweet);
  }
};

// Fetching tweets from /tweets
const loadTweets = function() {
  const formData = ($(this).serialize());
  $.ajax({
    method: "GET",
    url: "/tweets",
    data: formData,
    success: function(data) {
      renderTweets(data);
    }
  });
};
loadTweets();

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
