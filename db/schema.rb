# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170319024423) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attendings", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "event_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_attendings_on_event_id", using: :btree
    t.index ["user_id"], name: "index_attendings_on_user_id", using: :btree
  end

  create_table "cities", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_cities_on_name", unique: true, using: :btree
  end

  create_table "events", force: :cascade do |t|
    t.integer  "host_id",    null: false
    t.string   "details",    null: false
    t.string   "address",    null: false
    t.date     "date",       null: false
    t.time     "time",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["host_id"], name: "index_events_on_host_id", unique: true, using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.integer  "city_id"
    t.boolean  "is_host"
    t.string   "host_image_url"
    t.text     "host_intro"
    t.string   "facebook_url"
    t.string   "twitter_url"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
  end

end
