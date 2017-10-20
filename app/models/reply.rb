class Reply < ApplicationRecord
  validates :user_id, :message_id, presence: true

  belongs_to :user
  belongs_to :message
end
