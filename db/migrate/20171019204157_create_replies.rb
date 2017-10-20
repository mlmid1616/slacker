class CreateReplies < ActiveRecord::Migration[5.0]
  def change
    create_table :replies do |t|
      t.integer :user_id, null: false
      t.integer :message_id, null: false
      t.string :content, null: false 

      t.timestamps
    end
  end
end
