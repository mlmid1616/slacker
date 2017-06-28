# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.123create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.destroy_all
# pic = File.open('app/assets/images/jfk.jpeg')
#
# teddy = User.create!(username:"WildernessRulez", password: "password123", avatar: pic)
# george = User.create!(username:"RevolutionRinger", password: "password123", avatar: pic)
# lincoln = User.create!(username:"TopHatKing", password: "password123", avatar: pic)
# hoover = User.create!(username:"DamBuilder", password: "password123", avatar: pic)
# kennedy = User.create!(username:"MoonOrBust", password: "password123", avatar: pic)
# obama = User.create!(username:"BarrackObama3456", password: "password123", avatar: pic)

User.destroy_all
# pic = File.open('app/assets/images/jfk.jpeg')

teddy = User.create!(username:"WildernessRulez", password: "password123", avatar: File.open('app/assets/images/teddy.jpg'))
george = User.create!(username:"RevolutionRinger", password: "password123", avatar: File.open('app/assets/images/george.jpg'))
lincoln = User.create!(username:"TopHatKing", password: "password123", avatar: File.open('app/assets/images/lincoln.jpeg'))
hoover = User.create!(username:"DamBuilder", password: "password123", avatar: File.open('app/assets/images/hoover.jpg'))
kennedy = User.create!(username:"MoonOrBust", password: "password123", avatar: File.open('app/assets/images/jfk.jpeg'))
obama = User.create!(username:"BarrackObama3456", password: "password123", avatar: File.open('app/assets/images/obama.jpeg'))

user_ids = [teddy.id, george.id, lincoln.id, hoover.id, kennedy.id, obama.id]

# users = [teddy, george, lincoln, hoover, kennedy, obama]





Channel.destroy_all

ch1 = Channel.create(name:"MenOfHonor123", private: false)
ch2 = Channel.create(name:"DemocracyEnthusiasts", private: false)
ch3 = Channel.create(name:"TurkeyPardonerz", private: false)
ch4 = Channel.create(name:"mastersoftrivia", private: false)
ch5 = Channel.create(name:"CantStopWontStop", private: false)


ch6 = Channel.create(name:"RevolutionRinger, TopHatKing", private: true)
ch7 = Channel.create(name:"DamBuilder, BarrackObama3456, MoonOrBust", private: true)
ch8 = Channel.create(name:"RevolutionRinger, TopHatKing, DamBuilder, MoonOrBust, BarrackObama3456", private: true)

channel_ids = [ch1.id, ch2.id, ch3.id, ch4.id, ch5.id, ch6.id, ch7.id, ch8.id ]


Membership.destroy_all

Membership.create!(user_id: user_ids[0], channel_id: channel_ids[0])
Membership.create!(user_id: user_ids[1], channel_id: channel_ids[0])

Membership.create!(user_id: user_ids[2], channel_id: channel_ids[1])
Membership.create!(user_id: user_ids[0], channel_id: channel_ids[1])
Membership.create!(user_id: user_ids[1], channel_id: channel_ids[1])

Membership.create!(user_id: user_ids[0], channel_id: channel_ids[2])
Membership.create!(user_id: user_ids[1], channel_id: channel_ids[2])
Membership.create!(user_id: user_ids[2], channel_id: channel_ids[2])

Membership.create!(user_id: user_ids[0], channel_id: channel_ids[3])
Membership.create!(user_id: user_ids[4], channel_id: channel_ids[3])
Membership.create!(user_id: user_ids[3], channel_id: channel_ids[3])
Membership.create!(user_id: user_ids[2], channel_id: channel_ids[3])

Membership.create!(user_id: user_ids[0], channel_id: channel_ids[4])
Membership.create!(user_id: user_ids[5], channel_id: channel_ids[4])
Membership.create!(user_id: user_ids[4], channel_id: channel_ids[4])
Membership.create!(user_id: user_ids[3], channel_id: channel_ids[4])

Membership.create!(user_id: user_ids[0], channel_id: channel_ids[5])
Membership.create!(user_id: user_ids[1], channel_id: channel_ids[5])
Membership.create!(user_id: user_ids[2], channel_id: channel_ids[5])

Membership.create!(user_id: user_ids[0], channel_id: channel_ids[6])
Membership.create!(user_id: user_ids[3], channel_id: channel_ids[6])
Membership.create!(user_id: user_ids[5], channel_id: channel_ids[6])
Membership.create!(user_id: user_ids[4], channel_id: channel_ids[6])

Membership.create!(user_id: user_ids[0], channel_id: channel_ids[7])
Membership.create!(user_id: user_ids[1], channel_id: channel_ids[7])
Membership.create!(user_id: user_ids[3], channel_id: channel_ids[7])
Membership.create!(user_id: user_ids[4], channel_id: channel_ids[7])
Membership.create!(user_id: user_ids[5], channel_id: channel_ids[7])


Message.destroy_all

Message.create(user_id: george.id, channel_id: ch1.id, content: "it's g washington is anyone here?")
Message.create(user_id: lincoln.id, channel_id: ch1.id, content: "im here what's up?")
Message.create(user_id: kennedy.id, channel_id: ch1.id, content: "yooooo")
Message.create(user_id: george.id, channel_id: ch1.id, content: "my boyz are all here!")
Message.create(user_id: george.id, channel_id: ch1.id, content: "who wants to talk common sense?")


Message.create(user_id: george.id, channel_id: ch2.id, content: "10 wooden teeth says you won't work in score to your next speech")
Message.create(user_id: lincoln.id, channel_id: ch2.id, content: "you're on. ill lead with it")

Message.create(user_id: george.id, channel_id: ch5.id, content: "how did hoover make this list?")
Message.create(user_id: lincoln.id, channel_id: ch5.id, content: "THANK YOU")
Message.create(user_id: lincoln.id, channel_id: ch5.id, content: "it's like, we get it, you built a dam")
Message.create(user_id: lincoln.id, channel_id: ch5.id, content: "so glad we can gab about this is private")
