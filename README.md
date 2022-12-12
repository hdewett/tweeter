# Tweeter Project

Tweeter is a simple, single-page Twitter clone. It uses HTML, CSS, JS, jQuery and AJAX on the front-end and Node.js and Express for the back-end.

## Features

- Tweet List
  - Scroll to top button that appears once user scrolls 100px down the page. Hovering will animate it and clicking it will return user to top of page.
  - Tweet list updates as soon as tweet is posted without refreshing page.
  - Tweet navigation ("Flag", "Like", and "Retweet") animate and change colour on hover.
  - Tweets display relevant time of when they were submitted.
- Compose Tweet
  - "Write a new tweet" button with animated icon toggles display for new tweet text area.
  - Real-time character count to ensure tweets stay within character limit.
  - Validation errors if tweet exceeds character count.
- Responsive Design
  - Separate mobile and desktop layouts

## Final Product

Image of Mobile View
!["Image of Mobile View"](https://github.com/hdewett/tweeter/blob/master/public/images/MobileView.png)

Image of Desktop View
!["Image of Desktop View"](https://github.com/hdewett/tweeter/blob/master/public/images/DesktopView.png)

Image of Tweet Being Composed in Mobile
!["Image of Tweet Being Composed in Mobile"](https://github.com/hdewett/tweeter/blob/master/public/images/TweetComposed.png)

Image of Validation Error for a tweet that is too long in Desktop
!["Image of Validation Error for a tweet that is too long in Desktop"](https://github.com/hdewett/tweeter/blob/master/public/images/ValidationError.png)

## Dependencies

- Express
- Node 5.10.x or above
- Body-Parser

## Getting Started

1. Clone or download this repository to your local device.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.
