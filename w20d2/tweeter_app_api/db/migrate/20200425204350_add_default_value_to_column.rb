class AddDefaultValueToColumn < ActiveRecord::Migration[6.0]
  def change
    change_column_default :tweets, :title, Time.now
  end
end
