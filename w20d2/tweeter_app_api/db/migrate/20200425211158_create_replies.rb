class CreateReplies < ActiveRecord::Migration[6.0]
  def change
    create_table :replies do |t|
      t.integer :tweet_id
      t.string :content
    end
  end
end
