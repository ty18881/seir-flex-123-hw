class ChangePlaysTableColumnToNumPlays < ActiveRecord::Migration[6.0]
  def change
    rename_column :plays, :plays, :num_plays 
  end
end
