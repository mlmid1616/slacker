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
ch9 = Channel.create(name:"WhiteHouseWinners", private: false)

ch6 = Channel.create(name:"RevolutionRinger, TopHatKing", private: true)
ch7 = Channel.create(name:"DamBuilder, BarrackObama3456, MoonOrBust", private: true)
ch8 = Channel.create(name:"RevolutionRinger, TopHatKing, DamBuilder, MoonOrBust, BarrackObama3456", private: true)

channel_ids = [ch1.id, ch2.id, ch3.id, ch4.id, ch5.id, ch6.id, ch7.id, ch8.id, ch9.id ]


Membership.destroy_all

Membership.create!(user_id: user_ids[1], channel_id: channel_ids[8])
Membership.create!(user_id: user_ids[2], channel_id: channel_ids[8])
Membership.create!(user_id: user_ids[5], channel_id: channel_ids[8])

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
commonsense = Message.create(user_id: george.id, channel_id: ch1.id, content: "who wants to talk common sense?")
  Reply.create(user_id: lincoln.id, message_id: commonsense.id, content: "did you just finish that?")
  Reply.create(user_id: obama.id, message_id: commonsense.id, content: "that was like hundreds of years ago...")
  Reply.create(user_id: george.id, message_id: commonsense.id, content: "Some of us like to revisit the classics")
  Reply.create(user_id: kennedy.id, message_id: commonsense.id, content: "Wait so in regards to time do we all know about the present or just up to the year we were president?")
  Reply.create(user_id: obama.id, message_id: commonsense.id, content: "Don't overthink it Kennedy")
  Reply.create(user_id: kennedy.id, message_id: commonsense.id, content: "Just wanted a little clarification...")
  Reply.create(user_id: obama.id, message_id: commonsense.id, content: "@Washington, spoiler, America becomes free!")
  Reply.create(user_id: george.id, message_id: commonsense.id, content: "no way!!! ;)")
  Reply.create(user_id: obama.id, message_id: commonsense.id, content: "but really if you are looking for another good read definitely check out Dreaming in Code")
  Reply.create(user_id: george.id, message_id: commonsense.id, content: "do you actually like that one?")
  Reply.create(user_id: obama.id, message_id: commonsense.id, content: "the first 100 pages were GREAT")


Message.create(user_id: kennedy.id, channel_id: ch1.id, content: "I could talk a little common sense")
Message.create(user_id: george.id, channel_id: ch1.id, content: "How do you get a one-armed redcoat out of a tree? ")
Message.create(user_id: lincoln.id, channel_id: ch1.id, content: "how?")
waveMessage = Message.create(user_id: george.id, channel_id: ch1.id, content: "you wave to him..")
  Reply.create(user_id: obama.id, message_id: waveMessage.id, content: "where did you hear this one?")
  Reply.create(user_id: george.id, message_id: waveMessage.id, content: "100 Ways to Mock a Brit, Harsh Edition")
  Reply.create(user_id: obama.id, message_id: waveMessage.id, content: "I'm going to be buying that YESTERDAY")

Message.create(user_id: lincoln.id, channel_id: ch1.id, content: "boo")
Message.create(user_id: kennedy.id, channel_id: ch1.id, content: "Jacky just told me a good one")
Message.create(user_id: george.id, channel_id: ch1.id, content: "let me hear it")
Message.create(user_id: kennedy.id, channel_id: ch1.id, content: "I don't think Lincoln would approve")
Message.create(user_id: lincoln.id, channel_id: ch1.id, content: "I love jokes!")
Message.create(user_id: kennedy.id, channel_id: ch1.id, content: "Did you hear they shut down the British National Library? Someone stole the book")
Message.create(user_id: lincoln.id, channel_id: ch1.id, content: "meh")
Message.create(user_id: george.id, channel_id: ch1.id, content: "5/10")
Message.create(user_id: lincoln.id, channel_id: ch1.id, content: "What's the smallest room in the world?")
Message.create(user_id: george.id, channel_id: ch1.id, content: "??")
hallOfFame = Message.create(user_id: lincoln.id, channel_id: ch1.id, content: "the british hall of fame!")
  Reply.create(user_id: lincoln.id, message_id: hallOfFame.id, content: "Get it???")

Message.create(user_id: george.id, channel_id: ch1.id, content: "maybe we ought to stick to politics")
Message.create(user_id: kennedy.id, channel_id: ch1.id, content: "It's true we are upstanding gentlemen")
Message.create(user_id: george.id, channel_id: ch1.id, content: "** says the bootlegger **")
Message.create(user_id: lincoln.id, channel_id: ch1.id, content: "ZING")
Message.create(user_id: kennedy.id, channel_id: ch1.id, content: "That was like 100 years ago and abe no one says zing anymore")






Message.create(user_id: george.id, channel_id: ch2.id, content: "10 wooden teeth says you won't work in score to your next speech")
Message.create(user_id: lincoln.id, channel_id: ch2.id, content: "you're on. ill lead with it")
Message.create(user_id: george.id, channel_id: ch2.id, content: "you better")
Message.create(user_id: lincoln.id, channel_id: ch2.id, content: "been meaning ot ask...have you started expanding west at all?")
Message.create(user_id: george.id, channel_id: ch2.id, content: "not really, is it good?")
Message.create(user_id: lincoln.id, channel_id: ch2.id, content: "Beautiful. Mountains, Rivers, Lakes like nothing in the old world")
Message.create(user_id: george.id, channel_id: ch2.id, content: "have you been?")
lewisAndClark = Message.create(user_id: lincoln.id, channel_id: ch2.id, content: "No, but these two explorers named Lewis and Clark took a group out to see chart the land")
  Reply.create(user_id: george.id, message_id: lewisAndClark.id, content: "I read about those guys!")
  Reply.create(user_id: teddy.id, message_id: lewisAndClark.id, content: "They were two amazing explorers")

Message.create(user_id: george.id, channel_id: ch2.id, content: "have you been?")
Message.create(user_id: teddy.id, channel_id: ch2.id, content: "I once said, the badlands is where the love of my life began")
Message.create(user_id: george.id, channel_id: ch2.id, content: "when did you go?")
Message.create(user_id: teddy.id, channel_id: ch2.id, content: "My wife alice passed away and I found solace in the wild wild west that was Chicago")
Message.create(user_id: lincoln.id, channel_id: ch2.id, content: "represent!")
Message.create(user_id: george.id, channel_id: ch2.id, content: "I'm gonna go")
Message.create(user_id: teddy.id, channel_id: ch2.id, content: "You need to go far out. So far that civilization is an after thought. The west...it's where you learn to be a man")
Message.create(user_id: lincoln.id, channel_id: ch2.id, content: "That's what we say out here in ILLinois")
Message.create(user_id: teddy.id, channel_id: ch2.id, content: "Sorry when I say west I mean my West...like definitely NOT Illinois, you can just go right through there")
Message.create(user_id: lincoln.id, channel_id: ch2.id, content: "We are the land of lincoln though")
Message.create(user_id: teddy.id, channel_id: ch2.id, content: "When your 'thing' is one single man it's difficult to make the case you have much..")
Message.create(user_id: george.id, channel_id: ch2.id, content: "The badlands...is that it?")
Message.create(user_id: teddy.id, channel_id: ch2.id, content: "Not even close. Keep going west. Past the rockies, to a land called 'Yosemite'")
Message.create(user_id: george.id, channel_id: ch2.id, content: "what is yosemite like?")
yosemiteDescription = Message.create(user_id: teddy.id, channel_id: ch2.id, content: "Monoliths and waterfalls that fall thousands of feet into pools of perfectly clear water, paired with fields of rushing rivers and fields of grass")
  Reply.create(user_id: george.id, message_id: yosemiteDescription.id, content: "Okay we HAVE to go")
Message.create(user_id: lincoln.id, channel_id: ch2.id, content: "*fall thousands of meters")
Message.create(user_id: teddy.id, channel_id: ch2.id, content: "We actually went back to feet, meters never caught on")
Message.create(user_id: george.id, channel_id: ch2.id, content: "is there anywhere I should see?")
Message.create(user_id: teddy.id, channel_id: ch2.id, content: "One monolith that towers over the rest, I called it 'The Half of a Dome'...it's a working title ")
Message.create(user_id: george.id, channel_id: ch2.id, content: "Great. Once my stallion is done eating we will go")



Message.create(user_id: kennedy.id, channel_id: ch3.id, content: "is anyone in boston this weekend")
Message.create(user_id: george.id, channel_id: ch3.id, content: "yeah I think I'll be flying. should we get chowder or is it too soon?")
Message.create(user_id: kennedy.id, channel_id: ch3.id, content: "it's never too early for chowder my dear georgey")
Message.create(user_id: george.id, channel_id: ch3.id, content: "that point is so good we should eat twice as much as we were originally going to")
Message.create(user_id: hoover.id, channel_id: ch3.id, content: "I think I'm in town for the Woodworking convention I can probably stop by")
Message.create(user_id: george.id, channel_id: ch3.id, content: "kennedy remember that crab from last time with 9 legs?")
monster = Message.create(user_id: kennedy.id, channel_id: ch3.id, content: "That thing was a monster!")
  Reply.create(user_id: hoover.id, message_id: monster.id, content: "Hi John, are you getting my messages?")

Message.create(user_id: hoover.id, channel_id: ch3.id, content: "What place did we want to attend?")
comparison = Message.create(user_id: kennedy.id, channel_id: ch3.id, content: "BUT that crab was nothing compared to karoke night at McFarleys")
  Reply.create(user_id: hoover.id, message_id: comparison.id, content: "That sounds so cool!")

Message.create(user_id: hoover.id, channel_id: ch3.id, content: "That's my favorite bar!")
Message.create(user_id: george.id, channel_id: ch3.id, content: "Sorry hoover, it's just kind of a two man tradition")
Message.create(user_id: hoover.id, channel_id: ch3.id, content: "I do believe I hath been insulted.")



Message.create(user_id: teddy.id, channel_id: ch4.id, content: "George you came through!")
Message.create(user_id: lincoln.id, channel_id: ch4.id, content: "I can't believe you knew so much about 14th centuary wig fashioning")
Message.create(user_id: george.id, channel_id: ch4.id, content: "lets just say I've been around a few well fluffed crops of hair in my day")
Message.create(user_id: teddy.id, channel_id: ch4.id, content: "I'll say!")
phreaks = Message.create(user_id: lincoln.id, channel_id: ch4.id, content: "The Phreaks of Philly didn't know what hit them")
  Reply.create(user_id: teddy.id, message_id: phreaks.id, content: "But they did know where to get matching shirts...")
  Reply.create(user_id: lincoln.id, message_id: phreaks.id, content: "A liberty bell cannot be a 'P'")

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
rain = Message.create(user_id: teddy.id, channel_id: ch5.id, content: "if you look at rain records the years of the SWT had crazy amts of rain")
  Reply.create(user_id: obama.id, message_id: rain.id, content: "there is no way this is true")
  Reply.create(user_id: hoover.id, message_id: rain.id, content: "I second that")
  Reply.create(user_id: teddy.id, message_id: rain.id, content: "the research is all there!")
  Reply.create(user_id: obama.id, message_id: rain.id, content: "sounds sensationalist to me...")
  Reply.create(user_id: hoover.id, message_id: rain.id, content: "aka wrong")
  Reply.create(user_id: teddy.id, message_id: rain.id, content: "I'll send you what I found via Pony Express")

Message.create(user_id: teddy.id, channel_id: ch5.id, content: "they think it caused the food to spoil and cause people to go insane")
Message.create(user_id: hoover.id, channel_id: ch5.id, content: "not buying it")
Message.create(user_id: teddy.id, channel_id: ch5.id, content: "fine what's your favorite piece of trivia?")
Message.create(user_id: hoover.id, channel_id: ch5.id, content: "we have the oldest functioning constitution")
functioning = Message.create(user_id: obama.id, channel_id: ch5.id, content: "'functioning'")
  Reply.create(user_id: hoover.id, message_id: functioning.id, content: "with how many amendments again?")

Message.create(user_id: hoover.id, channel_id: ch5.id, content: "hey it's pretty cool!!1!")
Message.create(user_id: obama.id, channel_id: ch5.id, content: "meh")
Message.create(user_id: kennedy.id, channel_id: ch5.id, content: "The great molasses flood of 1919")

sassMessage = Message.create(user_id: hoover.id, channel_id: ch5.id, content: "exp?")
  Reply.create(user_id: teddy.id, message_id: sassMessage.id, content: "omg read a history book")
  Reply.create(user_id: obama.id, message_id: sassMessage.id, content: "^^^")

Message.create(user_id: kennedy.id, channel_id: ch5.id, content: "Speaks for itself")



Message.create(user_id: george.id, channel_id: ch6.id, content: "how did hoover make this list?")
Message.create(user_id: lincoln.id, channel_id: ch6.id, content: "THANK YOU. It's like, we get it, you built a dam")
gab = Message.create(user_id: lincoln.id, channel_id: ch6.id, content: "so glad we can gab about this is private")
  Reply.create(user_id: george.id, message_id: gab.id, content: ";)")




Message.create(user_id: george.id, channel_id: ch7.id, content: "everyones national fav monument: go")
canyon = Message.create(user_id: lincoln.id, channel_id: ch7.id, content: "easy, grand canyon")
  Reply.create(user_id: kennedy.id, message_id: canyon.id, content: "overrated")
  Reply.create(user_id: teddy.id, message_id: canyon.id, content: "It's great right now, before all the tourists start coming in 1960")
  Reply.create(user_id: obama.id, message_id: canyon.id, content: "Teddy, the grand canyon is a MESS in the early 20th century. Read a book")
Message.create(user_id: george.id, channel_id: ch7.id, content: "lincoln you've never been past Illinois")
Message.create(user_id: lincoln.id, channel_id: ch7.id, content: "you don't even know what Illinois is!")
Message.create(user_id: obama.id, channel_id: ch7.id, content: "dolphinately the outerbanks, always been a fan")
Message.create(user_id: kennedy.id, channel_id: ch7.id, content: "is cape cod a national monument?")
Message.create(user_id: obama.id, channel_id: ch7.id, content: "JFK you're a man of the people")
Message.create(user_id: teddy.id, channel_id: ch7.id, content: "Definitely Yosemite")
choice = Message.create(user_id: kennedy.id, channel_id: ch7.id, content: "not a bad choice")
  Reply.create(user_id: teddy.id, message_id: choice.id, content: "duh")
  Reply.create(user_id: kennedy.id, message_id: choice.id, content: "just being an active listener")
Message.create(user_id: teddy.id, channel_id: ch7.id, content: "Oh and you're welcome for all those monuments by the way")
Message.create(user_id: kennedy.id, channel_id: ch7.id, content: "explain?")
power = Message.create(user_id: teddy.id, channel_id: ch7.id, content: "I passed the anituities act, w/out it there's no power to make monuments or parks")
  Reply.create(user_id: obama.id, message_id: power.id, content: "Legendary act")
  Reply.create(user_id: teddy.id, message_id: power.id, content: "We only get our landscape once")
  Reply.create(user_id: obama.id, message_id: power.id, content: "Some people just don't get it")
  Reply.create(user_id: teddy.id, message_id: power.id, content: "I get it Obama, I get it")
Message.create(user_id: obama.id, channel_id: ch7.id, content: "yeah JFK read a book")
Message.create(user_id: kennedy.id, channel_id: ch7.id, content: "Okay that is NOT common knowledge")
Message.create(user_id: obama.id, channel_id: ch7.id, content: "thought you were a hah-vahd boy")
Message.create(user_id: kennedy.id, channel_id: ch7.id, content: "we're both hahvad boys")
Message.create(user_id: obama.id, channel_id: ch7.id, content: "oh yeah. I always forget about that")
Message.create(user_id: teddy.id, channel_id: ch7.id, content: "me as well")
Message.create(user_id: obama.id, channel_id: ch7.id, content: "did everyone here go to harvard?")
Message.create(user_id: hoover.id, channel_id: ch7.id, content: "Not me, go Card!!")
Message.create(user_id: obama.id, channel_id: ch7.id, content: "relax hooves")


Message.create(user_id: george.id, channel_id: ch9.id, content: "My presidential, I have created this channel under the assumping that we are probably the best this country has ever seen")
Message.create(user_id: lincoln.id, channel_id: ch9.id, content: "Do you really think that? It seems like there are a lot of other things we have to consider before jumping to that conclusion so fast")
Message.create(user_id: obama.id, channel_id: ch9.id, content: "I'm actaully on team washington for this one")

Message.create(user_id: lincoln.id, channel_id: ch9.id, content: "Mr Composure is going to jump to these rash conclusions?")
Message.create(user_id: obama.id, channel_id: ch9.id, content: "I mean, think about it. Walk up to any kid in the street and ask them to name three presidents. Who do you think they'll say? I reckon no one is going say Truman")
Message.create(user_id: george.id, channel_id: ch9.id, content: "Okay but also beyond little kids knowing our names I think the nation would be the most differnt had we not existed")
Message.create(user_id: lincoln.id, channel_id: ch9.id, content: "Would if Teddy joins this chat? Do you want him to hear that?")
Message.create(user_id: george.id, channel_id: ch9.id, content: "No worries, the the software engineer who made this clone hasn't implemented a channel joining feature yet")
responsive = Message.create(user_id: obama.id, channel_id: ch9.id, content: "Seriously? How does he or she expect new users to join our chats and see the sleek responsive reply thread?")
  Reply.create(user_id: obama.id, message_id: responsive.id, content: "or the intuitive channel forms?")
  Reply.create(user_id: george.id, message_id: responsive.id, content: "or the live chat?")
  Reply.create(user_id: lincoln.id, message_id: responsive.id, content: "or the flawless nav bar styling?")
  Reply.create(user_id: obama.id, message_id: responsive.id, content: "or the suave use of callbacks and lifecycle methods?")
  Reply.create(user_id: george.id, message_id: responsive.id, content: "aI don't think those last two are relevant to the situation")

Message.create(user_id: george.id, channel_id: ch9.id, content: "He put all his eggs in the demo basket and hopes he can just talk about how he WOULD implement the feature in interviews")
Message.create(user_id: obama.id, channel_id: ch9.id, content: "Wow that's quite a bet")
Message.create(user_id: george.id, channel_id: ch9.id, content: "I know")
wall = Message.create(user_id: lincoln.id, channel_id: ch9.id, content: "alright lets seal up that fourth wall I don't think this is helping anyones chances of getting a job")
  Reply.create(user_id: obama.id, message_id: wall.id, content: "great idea.. ")

Message.create(user_id: george.id, channel_id: ch9.id, content: "Sure. Obama, how's the free life?")
Message.create(user_id: obama.id, channel_id: ch9.id, content: "I've been so close to enjoying myself, but it's a little hard when, you know...")
Message.create(user_id: lincoln.id, channel_id: ch9.id, content: "Yeah that must make retirement a little bit tough")
Message.create(user_id: obama.id, channel_id: ch9.id, content: "George did you have a chance to see hamilton?")
Message.create(user_id: george.id, channel_id: ch9.id, content: "Did I see Hamilton? Did I see the Hip-Hopera based on my protege and practical son? Yeah, I saw Hamilton. One the best performances I've seen in a while")
Message.create(user_id: obama.id, channel_id: ch9.id, content: "My man, always on top of it. Lincoln have you been?")
visiting = Message.create(user_id: lincoln.id, channel_id: ch9.id, content: "I don't think I'll be visiting a theatre anytime soon")
  Reply.create(user_id: obama.id, message_id: sassMessage.id, content: "whoooops")
Message.create(user_id: obama.id, channel_id: ch9.id, content: "Sorry I always forget about that")
Message.create(user_id: lincoln.id, channel_id: ch9.id, content: "How???")
Message.create(user_id: obama.id, channel_id: ch9.id, content: "It's not always about you Lincoln")







Message.create(user_id: hoover.id, channel_id: ch8.id, content: "anyone here?")
repMessage = Message.create(user_id: obama.id, channel_id: ch8.id, content: "nope")
  Reply.create(user_id: hoover.id, message_id: repMessage.id, content: "very funny")
  Reply.create(user_id: obama.id, message_id: repMessage.id, content: "tyvm")
