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
Membership.create!(user_id: user_ids[3], channel_id: channel_ids[2])
Membership.create!(user_id: user_ids[4], channel_id: channel_ids[2])

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
Membership.create!(user_id: user_ids[2], channel_id: channel_ids[6])

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

Message.create(user_id: kennedy.id, channel_id: ch3.id, content: "is anyone in boston this weekend")
Message.create(user_id: george.id, channel_id: ch3.id, content: "yeah I think I'll be flying. should we get chowder or is it too soon?")
Message.create(user_id: kennedy.id, channel_id: ch3.id, content: "it's never too early for chowder my dear georgey")
Message.create(user_id: george.id, channel_id: ch3.id, content: "that point is so good we should eat twice as much as we were originally going to")
Message.create(user_id: hoover.id, channel_id: ch3.id, content: "I think I'm in town for the Woodworking convention I can probably stop by")
Message.create(user_id: george.id, channel_id: ch3.id, content: "kennedy remember that crab from last time with 9 legs?")
Message.create(user_id: kennedy.id, channel_id: ch3.id, content: "That thing was a monster!")
Message.create(user_id: hoover.id, channel_id: ch3.id, content: "What place did we want to attend?")
Message.create(user_id: kennedy.id, channel_id: ch3.id, content: "BUT that crab was nothing compared to karoke night at McFarleys")
Message.create(user_id: hoover.id, channel_id: ch3.id, content: "That's my favorite bar!")
Message.create(user_id: george.id, channel_id: ch3.id, content: "Sorry hoover, it's just kind of a two man tradition")
Message.create(user_id: hoover.id, channel_id: ch3.id, content: "I do believe I hath been insulted.")

Message.create(user_id: teddy.id, channel_id: ch4.id, content: "George you came through!")
Message.create(user_id: lincoln.id, channel_id: ch4.id, content: "I can't believe you knew so much about 14th centuary wig fashioning")
Message.create(user_id: george.id, channel_id: ch4.id, content: "lets just say I've been around a few well fluffed crops of hair in my day")
Message.create(user_id: teddy.id, channel_id: ch4.id, content: "I'll say!")
Message.create(user_id: lincoln.id, channel_id: ch4.id, content: "The Phreaks of Philly didn't know what hit them")
Message.create(user_id: teddy.id, channel_id: ch4.id, content: "Lest we forget the fall of the Washingtons of Knowledge in Our Heads")
Message.create(user_id: george.id, channel_id: ch4.id, content: "A moment to remember forever")


Message.create(user_id: hoover.id, channel_id: ch5.id, content: "Who named this country")
Message.create(user_id: teddy.id, channel_id: ch5.id, content: "Some italian explorer in like 15th century")
Message.create(user_id: obama.id, channel_id: ch5.id, content: "fav piece of american trivia?")
Message.create(user_id: teddy.id, channel_id: ch5.id, content: "Did you ever hear about Salem With Trial theory?")
Message.create(user_id: obama.id, channel_id: ch5.id, content: "theory of what?")
Message.create(user_id: teddy.id, channel_id: ch5.id, content: "There's a theory that the hysteria came from old soggy bread")
Message.create(user_id: hoover.id, channel_id: ch5.id, content: "no way")
Message.create(user_id: obama.id, channel_id: ch5.id, content: "why?")
Message.create(user_id: teddy.id, channel_id: ch5.id, content: "if you look at rain records the years of the SWT had crazy amts of rain")
Message.create(user_id: teddy.id, channel_id: ch5.id, content: "they think it caused the food to spoil and cause people to go insane")
Message.create(user_id: hoover.id, channel_id: ch5.id, content: "not buying it")
Message.create(user_id: teddy.id, channel_id: ch5.id, content: "fine what's your favorite piece of trivia?")
Message.create(user_id: hoover.id, channel_id: ch5.id, content: "we have the oldest still functioning constitution")
Message.create(user_id: obama.id, channel_id: ch5.id, content: "'functiong'")
Message.create(user_id: hoover.id, channel_id: ch5.id, content: "hey it's pretty cool!!1!")
Message.create(user_id: obama.id, channel_id: ch5.id, content: "meh")
Message.create(user_id: kennedy.id, channel_id: ch5.id, content: "The great molasses flood of 1919")
Message.create(user_id: hoover.id, channel_id: ch5.id, content: "exp?")
Message.create(user_id: kennedy.id, channel_id: ch5.id, content: "Speaks for itself")



Message.create(user_id: george.id, channel_id: ch6.id, content: "how did hoover make this list?")
Message.create(user_id: lincoln.id, channel_id: ch6.id, content: "THANK YOU")
Message.create(user_id: lincoln.id, channel_id: ch6.id, content: "it's like, we get it, you built a dam")
Message.create(user_id: lincoln.id, channel_id: ch6.id, content: "so glad we can gab about this is private")



Message.create(user_id: george.id, channel_id: ch7.id, content: "everyones national fav monument: go")
Message.create(user_id: lincoln.id, channel_id: ch7.id, content: "easy, grand canyon")
Message.create(user_id: george.id, channel_id: ch7.id, content: "lincoln you've never been past Illinois")
Message.create(user_id: lincoln.id, channel_id: ch7.id, content: "you don't even know what Illinois is!")
Message.create(user_id: obama.id, channel_id: ch7.id, content: "dolphinately the outerbanks, always been a fan")
Message.create(user_id: kennedy.id, channel_id: ch7.id, content: "is cape cod a national monument?")
Message.create(user_id: obama.id, channel_id: ch7.id, content: "JFK you're a man of the people")
Message.create(user_id: teddy.id, channel_id: ch7.id, content: "Definitely Yosemite")
Message.create(user_id: kennedy.id, channel_id: ch7.id, content: "not a bad choice")
Message.create(user_id: teddy.id, channel_id: ch7.id, content: "Oh and you're welcome for all those monuments by the way")
Message.create(user_id: kennedy.id, channel_id: ch7.id, content: "explain?")
Message.create(user_id: teddy.id, channel_id: ch7.id, content: "I passed the anituities act, w/out it there's no power to make monuments or parks")
Message.create(user_id: obama.id, channel_id: ch7.id, content: "yeah JFK read a book")
Message.create(user_id: kennedy.id, channel_id: ch7.id, content: "Okay that is NOT common knowledge")
Message.create(user_id: obama.id, channel_id: ch7.id, content: "thought you were a hah-vahd boy")
Message.create(user_id: kennedy.id, channel_id: ch7.id, content: "we're both hahvad boys")
Message.create(user_id: obama.id, channel_id: ch7.id, content: "oh yeah. I always forget about that")
Message.create(user_id: teddy.id, channel_id: ch7.id, content: "me as well")
Message.create(user_id: obama.id, channel_id: ch7.id, content: "did everyone here go to harvard?")
Message.create(user_id: hoover.id, channel_id: ch7.id, content: "Not me, go Card!!")
Message.create(user_id: obama.id, channel_id: ch7.id, content: "relax hooves")

Message.create(user_id: hoover.id, channel_id: ch8.id, content: "anyone here?")
Message.create(user_id: obama.id, channel_id: ch8.id, content: "nope")
