# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.123create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

teddy = User.create(username:"WildernessRulez", password: "password123")
george = User.create(username:"RevolutionRinger", password: "password123")
lincoln = User.create(username:"TopHatKing", password: "password123")
hoover = User.create(username:"DamBuilder", password: "password123")
kennedy = User.create(username:"MoonOrBust", password: "password123")
obama = User.create(username:"BarrackObama3456", password: "password123")

user_ids = [teddy.id, george.id, lincoln.id, hoover.id, kennedy.id, obama.id]


Channel.destroy_all

ch1 = Channel.create(name:"MenOfHonor123", private: false)
ch2 = Channel.create(name:"DemocracyEnthusiasts", private: false)

channel_ids = [ch1.id, ch2.id]


Membership.destroy_all

Membership.create(user_id: user_ids[0], channel_id: channel_ids[0])
Membership.create(user_id: user_ids[1], channel_id: channel_ids[0])
Membership.create(user_id: user_ids[2], channel_id: channel_ids[1])
Membership.create(user_id: user_ids[0], channel_id: channel_ids[1])
Membership.create(user_id: user_ids[1], channel_id: channel_ids[1])

Message.destroy_all

Message.create(user_id: george.id, channel_id: ch1.id, content: "it's g washington is anyone here?")
Message.create(user_id: lincoln.id, channel_id: ch1.id, content: "im here what's up?")
Message.create(user_id: kennedy.id, channel_id: ch1.id, content: "yooooo")
Message.create(user_id: george.id, channel_id: ch1.id, content: "my boyz are all here!")
Message.create(user_id: george.id, channel_id: ch1.id, content: "who wants to talk common sense?")


Message.create(user_id: george.id, channel_id: ch2.id, content: "10 wooden teeth says you won't work in score to your next speech")
Message.create(user_id: lincoln.id, channel_id: ch2.id, content: "you're on. ill lead with it")
