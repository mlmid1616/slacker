class Channel < ApplicationRecord
  validates :name, presence: true
  has_many :memberships
  has_many :messages
  has_many :users, through: :memberships
  # has_many :notifications
end
