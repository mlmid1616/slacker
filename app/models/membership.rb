class Membership < ApplicationRecord
  validates :user, :channel, presence: true
  belongs_to :user
  belongs_to :channel

  # validates uniqueness: { scope: [:user_id, :channel_id] }
  # validates :user_id, uniqueness: { scope: [:channel_id] }
end
