@messages.each do |message|
  json.set! message.id do
    json.extract! message, :content, :user_id, :channel_id
    json.count message.replies.length

    json.replies message.replies.each do |reply|
        json.avatar reply.user.avatar
        json.reply_content reply.content
        json.reply_username reply.user.username
        
    end
  end
end
