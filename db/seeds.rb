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

Message.create(user_id: teddy.id, channel_id: ch1.id, content: "it works bb")
Message.create(user_id: teddy.id, channel_id: ch1.id, content: "look we are messages")
Message.create(user_id: teddy.id, channel_id: ch1.id, content: "im teddy roosevelt")
Message.create(user_id: george.id, channel_id: ch1.id, content: "sup teddy im george")
Message.create(user_id: george.id, channel_id: ch1.id, content: "this clone is pretty sweet")
Message.create(user_id: teddy.id, channel_id: ch2.id, content: "channel 2 works as well??")
Message.create(user_id: george.id, channel_id: ch1.id, content: "yeah pretty rad")
