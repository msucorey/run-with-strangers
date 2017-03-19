class Create < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.integer :host_id, null: false
      t.string :details, null: false
      t.string :address, null: false
      t.date :date, null: false
      t.time :time, null: false

      t.timestamps
    end
    add_index :events, :host_id, unique: true
  end
end
