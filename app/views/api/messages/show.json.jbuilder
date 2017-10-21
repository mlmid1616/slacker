
json.extract! @message, :id, :content, :channel_id, :user_id,

json.replies @message.replies.each do |reply|
    json.content reply.content
    json.author reply.user.username
    json.avatar reply.user.avatar
end

# @messages.each do |message|
#   json.set! message.id do
#     json.extract! message, :content, :user_id, :channel_id
#   end
# end
