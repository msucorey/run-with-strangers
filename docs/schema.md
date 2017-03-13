# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
city_id         | integer   | not null, indexed
is_host         | boolean   | not null
host_image_url  | string    |
host_intro      | text      |
facebook_url    | text      |
twitter_url     | text      |

## cities
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name       | string    | not null
is_major        | boolean      | not null
image_url        | string      | not null

## events
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id   | integer   | not null, foreign key (references users), indexed
details       | string    | not null
address       | string    | not null
date | string    | not null
time | string    | not null

# attendings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed, unique [attending_id]
event_id      | integer   | not null, foreign key (references events), indexed
