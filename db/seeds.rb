User.delete_all
User.create!(
  username: "guest",
  email: "guest@rws.com",
  password: "password",
  host_image_url: "https://res.cloudinary.com/appacademy/image/upload/v1489884292/rwsicon_lj2vxq.png"
)

City.delete_all
City.create!(name: "SF / BAY AREA", image_url: "https://res.cloudinary.com/appacademy/image/upload/v1490218423/sanfranhires_o8xvdu.jpg"
)
City.create!(name: "CHICAGO", image_url: "https://res.cloudinary.com/appacademy/image/upload/v1490218709/chicago_jm7drz.jpg"
)
City.create!(name: "NYC", image_url: "https://res.cloudinary.com/appacademy/image/upload/v1490218860/nyhighres_npsi1k.jpg"
)
san_fran = City.find_by_name("SF / BAY AREA").id
chi_town = City.find_by_name("CHICAGO").id
nyc = City.find_by_name("NYC").id

#san fran users
User.create!(username: "joe", email: "joe", password: "strongpword", city_id: san_fran, host_image_url: Faker::Avatar.image)
User.create!(username: "jane", email: "jane", password: "strongpword", city_id: san_fran, host_image_url: Faker::Avatar.image)
User.create!(username: "bob", email: "bob", password: "strongpword", city_id: san_fran, host_image_url: Faker::Avatar.image)
User.create!(username: "mary", email: "mary", password: "strongpword", city_id: san_fran, host_image_url: Faker::Avatar.image)
User.create!(username: "bill", email: "bill", password: "strongpword", city_id: san_fran, host_image_url: Faker::Avatar.image)
User.create!(username: "lisa", email: "lisa", password: "strongpword", city_id: san_fran, host_image_url: Faker::Avatar.image)
User.create!(username: "ron", email: "ron", password: "strongpword", city_id: san_fran, host_image_url: Faker::Avatar.image)
User.create!(username: "nancy", email: "nancy", password: "strongpword", city_id: san_fran, host_image_url: Faker::Avatar.image)
User.create!(username: "eric", email: "eric", password: "strongpword", city_id: san_fran, host_image_url: Faker::Avatar.image)
User.create!(username: "betty", email: "betty", password: "strongpword", city_id: san_fran, host_image_url: Faker::Avatar.image)
#chicago users
User.create!(username: "joec", email: "joec", password: "strongpword", city_id: chi_town, host_image_url: Faker::Avatar.image)
User.create!(username: "janec", email: "janec", password: "strongpword", city_id: chi_town, host_image_url: Faker::Avatar.image)
User.create!(username: "bobc", email: "bobc", password: "strongpword", city_id: chi_town, host_image_url: Faker::Avatar.image)
User.create!(username: "maryc", email: "maryc", password: "strongpword", city_id: chi_town, host_image_url: Faker::Avatar.image)
User.create!(username: "billc", email: "billc", password: "strongpword", city_id: chi_town, host_image_url: Faker::Avatar.image)
User.create!(username: "lisac", email: "lisac", password: "strongpword", city_id: chi_town, host_image_url: Faker::Avatar.image)
User.create!(username: "ronc", email: "ronc", password: "strongpword", city_id: chi_town, host_image_url: Faker::Avatar.image)
User.create!(username: "nancyc", email: "nancyc", password: "strongpword", city_id: chi_town, host_image_url: Faker::Avatar.image)
User.create!(username: "ericc", email: "ericc", password: "strongpword", city_id: chi_town, host_image_url: Faker::Avatar.image)
User.create!(username: "bettyc", email: "bettyc", password: "strongpword", city_id: chi_town, host_image_url: Faker::Avatar.image)
#nyc users
User.create!(username: "joen", email: "joen", password: "strongpword", city_id: nyc, host_image_url: Faker::Avatar.image)
User.create!(username: "janen", email: "janen", password: "strongpword", city_id: nyc, host_image_url: Faker::Avatar.image)
User.create!(username: "bobn", email: "bobn", password: "strongpword", city_id: nyc, host_image_url: Faker::Avatar.image)
User.create!(username: "maryn", email: "maryn", password: "strongpword", city_id: nyc, host_image_url: Faker::Avatar.image)
User.create!(username: "billn", email: "billn", password: "strongpword", city_id: nyc, host_image_url: Faker::Avatar.image)
User.create!(username: "lisan", email: "lisan", password: "strongpword", city_id: nyc, host_image_url: Faker::Avatar.image)
User.create!(username: "ronn", email: "ronn", password: "strongpword", city_id: nyc, host_image_url: Faker::Avatar.image)
User.create!(username: "nancyn", email: "nancyn", password: "strongpword", city_id: nyc, host_image_url: Faker::Avatar.image)
User.create!(username: "ericn", email: "ericn", password: "strongpword", city_id: nyc, host_image_url: Faker::Avatar.image)
User.create!(username: "bettyn", email: "bettyn", password: "strongpword", city_id: nyc, host_image_url: Faker::Avatar.image)

guest = User.find_by_username("guest").id
#san fran users
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
#chicago users
joec = User.find_by_username("joec").id
janec = User.find_by_username("janec").id
bobc = User.find_by_username("bobc").id
maryc = User.find_by_username("maryc").id
billc = User.find_by_username("billc").id
lisac = User.find_by_username("lisac").id
ronc = User.find_by_username("ronc").id
nancyc = User.find_by_username("nancyc").id
ericc = User.find_by_username("ericc").id
bettyc = User.find_by_username("bettyc").id
#nyc users
joen = User.find_by_username("joen").id
janen = User.find_by_username("janen").id
bobn = User.find_by_username("bobn").id
maryn = User.find_by_username("maryn").id
billn = User.find_by_username("billn").id
lisan = User.find_by_username("lisan").id
ronn = User.find_by_username("ronn").id
nancyn = User.find_by_username("nancyn").id
ericn = User.find_by_username("ericn").id
bettyn = User.find_by_username("bettyn").id

Event.delete_all
#san fran events
Event.create!(details: "fast one!", address: Faker::Address.street_name, date: Faker::Date.forward(23), time: Faker::Time.forward(23, :morning), host_id: joe)
Event.create!(details: "slow one!", address: Faker::Address.street_name, date: Faker::Date.forward(23), time: Faker::Time.forward(23, :morning), host_id: joe)
Event.create!(details: "conversation jog", address: Faker::Address.street_name, date: Faker::Date.forward(23), time: Faker::Time.forward(23, :evening), host_id: jane)
Event.create!(details: "fun run!", address: Faker::Address.street_name, date: Faker::Date.forward(23), time: Faker::Time.forward(23, :evening), host_id: bob)
#chicago events
Event.create!(details: "run 4 bratwurst", address:
Faker::Address.street_name, date: Faker::Date.forward(23), time: Faker::Time.forward(23, :morning), host_id: joec)
Event.create!(details: "beer run!", address: Faker::Address.street_name, date: Faker::Date.forward(23), time: Faker::Time.forward(23, :morning), host_id: joec)
Event.create!(details: "Moms on the run", address: Faker::Address.street_name, date: Faker::Date.forward(23), time: Faker::Time.forward(23, :evening), host_id: janec)
Event.create!(details: "Paleo runners", address: Faker::Address.street_name, date: Faker::Date.forward(23), time: Faker::Time.forward(23, :evening), host_id: bobc)
Event.create!(details: "parkour only", address: Faker::Address.street_name, date: Faker::Date.forward(23), time: Faker::Time.forward(23, :evening), host_id: bobc)
#nyc events
Event.create!(details: "pizza run!", address:
Faker::Address.street_name, date: Faker::Date.forward(23), time: Faker::Time.forward(23, :morning), host_id: joen)
Event.create!(details: "no sleep til Brooklyn", address: Faker::Address.street_name, date: Faker::Date.forward(23), time: Faker::Time.forward(23, :morning), host_id: joen)
Event.create!(details: "elites only", address: Faker::Address.street_name, date: Faker::Date.forward(23), time: Faker::Time.forward(23, :evening), host_id: janen)
Event.create!(details: "talkers with a running problem", address: Faker::Address.street_name, date: Faker::Date.forward(23), time: Faker::Time.forward(23, :evening), host_id: bobn)
Event.create!(details: "running to heal", address: Faker::Address.street_name, date: Faker::Date.forward(23), time: Faker::Time.forward(23, :evening), host_id: bobn)
Event.create!(details: "runners with strollers", address: Faker::Address.street_name, date: Faker::Date.forward(23), time: Faker::Time.forward(23, :evening), host_id: janen)

#san fran events
fast = Event.find_by_details("fast one!").id
slow = Event.find_by_details("slow one!").id
convo = Event.find_by_details("conversation jog").id
fun = Event.find_by_details("fun run!").id
#chicago events
brat = Event.find_by_details("run 4 bratwurst").id
beer = Event.find_by_details("beer run!").id
moms = Event.find_by_details("Moms on the run").id
paleo = Event.find_by_details("Paleo runners").id
park = Event.find_by_details("parkour only").id
#nyc events
pizza = Event.find_by_details("pizza run!").id
nosleep = Event.find_by_details("no sleep til Brooklyn").id
elites = Event.find_by_details("elites only").id
prob = Event.find_by_details("talkers with a running problem").id
heal = Event.find_by_details("running to heal").id
strollers = Event.find_by_details("runners with strollers").id

Attending.delete_all
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
