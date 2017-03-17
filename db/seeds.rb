User.delete_all
User.create!(
  username: "guest",
  email: "guest@rws.com",
  password: "password"
)

City.delete_all
City.create!(name: "SF / BAY AREA", image_url: "https://www.wired.com/wp-content/uploads/2016/06/san-francisco-airbnb-142835466.jpg"
)
City.create!(name: "CHICAGO", image_url: "https://d3qi0qp55mx5f5.cloudfront.net/www/i/homepage/spotlight/urban-chicago-spotlight.jpg"
)
City.create!(name: "NYC", image_url: "https://cdn.history.com/sites/2/2013/12/new-york-city-H.jpeg"
)

# City.create!(name: "Toronto", is_major: true)
# City.create!(name: "Los Angeles", is_major: false)
# City.create!(name: "Philadelphia", is_major: true)
# City.create!(name: "Duke University", is_major: true)
