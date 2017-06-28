@users.each do |user|
  json.set! user.id do
    json.extract! user, :username, :id
    # debugger
    json.avatar_url asset_path(user.avatar.url)
  end
end
