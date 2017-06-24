
json.extract! @message, :id, :content, :channel_id, :user_id


# @messages.each do |message|
#   json.set! message.id do
#     json.extract! message, :content, :user_id, :channel_id
#   end
# end
