class CreateCharacter < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :desc
      t.string :img_url
    end
  end
end
