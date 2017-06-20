# DB Schema

## User

| column          | type     | details           |
|-----------------|----------|---------------------|
| username        | `string` | `unique` `presence` `indexed` |
| email           | `string` | `unique` `presence` `indexed` |
| avatar_url      | `string` | `string`            |
| password_digest | `string` | `unique` `presence` |
| session_token   | `string` | `unique` `presence` `indexed` |
 - User Model Associations
- **Has Many**
  - Messages
  - Channels through Memberships


## Channel

| column      | type      | details           |
|-------------|-----------|---------------------|
| name        | `string`  | `unique` `presence` |
| private     | `boolean` | `presence` `default: false`|
  - Channel Model Associations
- **Has Many**
  - Messages
  - Users through Memberships

## Message

| column     | type      | details  |
|------------|-----------|------------|
| user_id    | `integer` | `presence` |
| channel_id | `integer` | `presence` |
| content    | `string`  |            |

  - Message Model Associations
- **Belongs To**
  - User
  - Channel


## Membership

| column     | type      | details  |
|------------|-----------|------------|
| user_id    | `integer` | `presence` |
| channel_id | `integer` | `presence` |
  - Membership Model Associations
- **Belongs To**
  - User
  - Channel
