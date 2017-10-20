@replies.each do |reply|
  json.set! reply.id do
    json.extract! reply, :content, :user_id, :message_id
  end
end
