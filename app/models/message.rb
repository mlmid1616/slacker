class Message < ActiveRecord::Base
  belongs_to :user
  belongs_to :channel
  has_many :replies

  # def replies
  #   Reply.find_by(message_id: == self.id)

end
