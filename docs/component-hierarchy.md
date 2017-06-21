# Component Hierarchy:


### Before logging in:
  - LandingPageContainer
     - NavBarContainer
        * NavBar
         * SessionForm


## After logging in:
 - Home Container
   - NavColumn:
     - Header Container:
       + Header:
          * display username
          * display 'Slacker'
      - ChannelListContainer:
        - ChannelList
            - NewChannelFormContainer
              * NewChannelForm
            * ChannelListItem
      - DirectMessageListContainer:
          - DirectMessageFormContainer
            - DirectMessageForm
          - DirectMessagesList
              * DirectMessageListItem
  - MainChannelContainer
     - ChannelHeaderContainer
        - ChannelHeader
     - ChannelMessagesContainer
       + ChannelMessages
          + ChannelMessageItemContainer
            * ChannelMessageItem
     - NewMessageContainer
        - NewMessageForm

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "SessionFormContainer" |
| "/log-in" | "SessionFormContainer" |
| "/home" | "HomeContainer" |
| "/channels/:channelId" | "MainChannelContainer" |
| "/channels/new" | "NewChannelFormContainer" |
| "/dms/new" | "NewChannelFormContainer" |
