class AddColumnToAttendings < ActiveRecord::Migration[5.0]
  def change
    add_column :attendings, :status, :string
  end
end
