class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.integer :city_id
      t.boolean :is_host
      t.string :host_image_url
      t.text :host_intro
      t.string :facebook_url
      t.string :twitter_url

      t.timestamps
    end
    add_index :users, :email, unique: true
  end
end
