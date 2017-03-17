class CreateCities < ActiveRecord::Migration[5.0]
  def change
    create_table :cities do |t|
      t.string :name, null: false
      t.boolean :is_major, null: false
      t.string :image_url

      t.timestamps
    end
    add_index :cities, :name, unique: true
  end
end
