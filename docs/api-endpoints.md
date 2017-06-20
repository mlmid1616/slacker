# API Endpoints

## HTML API

#### Root
- `GET /` - load Slacker application

## JSON API

### Session
- `POST /api/session` -log in
- `DELETE /api/session` - log out

### Users
- `GET /api/users` - retrieve all users
- `GET /api/channel/:channel_id/users` - retrieve all users of a channel
- `POST /api/users` - create a user
- `PATCH /api/users/:id` - update a user
- `DELETE /api/users/:id` - delete a user


### Channels
- `GET /api/channels` - retrieve all channels
- `POST /api/channels` - create a channel
- `PATCH /api/channels/:id` - update a channel
- `DELETE /api/channels/:id` - delete a channel
- `GET  /api/users/:user_id/channels` - retrieve channels for a user

### Messages
- `GET /api/messages` - retrieve all messages
- `GET /api/channels/:channel_id/messages` - retrieve all messages of a channel
- `POST /api/channels/:channel_id/messages/` - create a message
- `PATCH /api/messages/:id` - update a message
- `DELETE /api/messages/:id` - delete a message

<!-- ### Memberships
- `GET /api/users/:user_id/memberships` - retrieve the channels of a user
- `GET /api/channels/:channel_id/memberships` - retrieve the users of a channel -->
