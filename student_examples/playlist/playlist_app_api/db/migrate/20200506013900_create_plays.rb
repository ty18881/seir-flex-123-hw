class CreatePlays < ActiveRecord::Migration[6.0]
  def change
    create_table :plays do |t|
      t.references :song, null: false, foreign_key: true
      t.references :playlist, null: false, foreign_key: true
      t.integer :plays

      t.timestamps
    end
  end
end
