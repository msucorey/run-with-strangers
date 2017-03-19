class CreateAttendingsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :attendings do |t|
      t.integer :user_id, null: false
      t.integer :event_id, null: false

      t.timestamps
    end
    add_index :attendings, :user_id
    add_index :attendings, :event_id
  end
end
