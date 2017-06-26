# json.arra! @channels, :name, :private, :id

@channels.each do |channel|
  json.set! channel.id do
    json.extract! channel, :name, :private, :id
  end
end
