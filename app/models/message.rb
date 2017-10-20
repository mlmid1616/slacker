class Message < ActiveRecord::Base
  belongs_to :user
  belongs_to :channel
  has_many :replies 

end
