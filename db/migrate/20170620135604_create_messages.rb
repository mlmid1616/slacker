class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.integer :user_id, null: false
      t.integer :channel_id, null: false
      t.text :content, null: false
      
      t.timestamps
    end
  end

end


# t.string :username
# t.string :email
# password_digest :string
# session_token :string
