User.delete_all
User.create!(
  username: "guest",
  email: "guest@rws.com",
  password: "password",
)

City.delete_all
City.create!(name: "SF / BAY AREA", image_url: "https://www.wired.com/wp-content/uploads/2016/06/san-francisco-airbnb-142835466.jpg"
)
City.create!(name: "CHICAGO", image_url: "https://d3qi0qp55mx5f5.cloudfront.net/www/i/homepage/spotlight/urban-chicago-spotlight.jpg"
)
City.create!(name: "NYC", image_url: "https://cdn.history.com/sites/2/2013/12/new-york-city-H.jpeg"
)
san_fran = City.find_by_name("SF / BAY AREA").id

User.create!(username: "joe", email: "joe", password: "strongpword", city_id: san_fran)
User.create!(username: "jane", email: "jane", password: "strongpword", city_id: san_fran)
User.create!(username: "bob", email: "bob", password: "strongpword", city_id: san_fran)
User.create!(username: "mary", email: "mary", password: "strongpword", city_id: san_fran)
User.create!(username: "bill", email: "bill", password: "strongpword", city_id: san_fran)
User.create!(username: "lisa", email: "lisa", password: "strongpword", city_id: san_fran)
User.create!(username: "ron", email: "ron", password: "strongpword", city_id: san_fran)
User.create!(username: "nancy", email: "nancy", password: "strongpword", city_id: san_fran)
User.create!(username: "eric", email: "eric", password: "strongpword", city_id: san_fran)
User.create!(username: "betty", email: "betty", password: "strongpword", city_id: san_fran)

guest = User.find_by_username("guest").id
joe = User.find_by_username("joe").id
jane = User.find_by_username("jane").id
bob = User.find_by_username("bob").id
mary = User.find_by_username("mary").id
bill = User.find_by_username("bill").id
lisa = User.find_by_username("lisa").id
ron = User.find_by_username("ron").id
nancy = User.find_by_username("nancy").id
eric = User.find_by_username("eric").id
betty = User.find_by_username("betty").id

Event.delete_all
Event.create!(details: "fast one", address: "my house", date: "2011-05-19", time: "10:30:14", host_id: joe)
Event.create!(details: "slow one", address: "your house", date: "2011-05-19", time: "10:30:14", host_id: joe)
Event.create!(details: "conversation jog", address: "Embarcadero", date: "2011-05-19", time: "10:30:14", host_id: jane)
Event.create!(details: "fun run", address: "Chinatown", date: "2011-05-19", time: "10:30:14", host_id: bob)

fast = Event.find_by_details("fast one").id
slow = Event.find_by_details("slow one").id
convo = Event.find_by_details("conversation jog").id
fun = Event.find_by_details("fun run").id

Attending.create!(user_id: joe, event_id: fast)
Attending.create!(user_id: jane, event_id: fast)
Attending.create!(user_id: bob, event_id: fast)
Attending.create!(user_id: mary, event_id: fast)
Attending.create!(user_id: bill, event_id: slow)
Attending.create!(user_id: lisa, event_id: slow)
Attending.create!(user_id: ron, event_id: slow)
Attending.create!(user_id: nancy, event_id: slow)
Attending.create!(user_id: eric, event_id: slow)
Attending.create!(user_id: betty, event_id: slow)
Attending.create!(user_id: joe, event_id: convo)
Attending.create!(user_id: jane, event_id: convo)
Attending.create!(user_id: bob, event_id: fun)
Attending.create!(user_id: mary, event_id: fun)

# City.create!(name: "Toronto", is_major: true)
# City.create!(name: "Los Angeles", is_major: false)
# City.create!(name: "Philadelphia", is_major: true)
# City.create!(name: "Duke University", is_major: true)
