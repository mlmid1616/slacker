class AddUsersToChannels < ActiveRecord::Migration[5.0]
  def change
    add_column :channels, :users, :string
  end
end
