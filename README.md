# Slacker

## README
Slacker is a collaborative live messaging platform inspired by Slack and was built end-to-end in 2 weeks.
Live: https://fullstackslacker.herokuapp.com/#/ (works best in chorme)

## Implementation

Slacker's UI and single-page architecture were built with React.js and Ruby on Rails. Messaging data is stored in a Postgres database, while AWS hosts all user images.

In addition, the app also utilizes the following technologies:

Redux
BCrypt
Pusher
Figaro
Paperclip
jBuilder
react-modal


## Features

The application is composed of the following features.

## Authentication

Slacker has both front-end and back-end authentication. On the backend, Slacker uses BCrypt by hashing user passwords and saving only the encrypted user-data to the database. A cookie storing a hashed token keeps track of the user's current session. If there is not a matching session token then the user is redirected to the login page for authentication.

## Real-time Messaging

The app leverages the Pusher API in order to maintain a WebSocket and TCP-based protocol connection. These enable bi-directional communication between the server and the client.

When a client selects a channel to view, they become subscribed to a unique connection through pusher. The connections means that they are subscribed for any update to the channel.

## Channels

Slacker allows users to create public channels by entering a name and then selecting the users they wish to be in the channel. Channels are accessible by any user.

## Direct Messages

Slacker allows users to create private channels by simply selecting the users they wish to be in their channel. Unlike public channels these are not accessible by any user.

## Future Production

Slacker will always be improving. The next features I plan to implement are:

1. Notifications
2. Channel Search
3. Emoticons
