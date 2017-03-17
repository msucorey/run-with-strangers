User.delete_all
User.create!(
  username: "guest",
  email: "guest@rws.com",
  password: "password"
)

City.delete_all
City.create!(name: "SF", is_major: true, image_url: "https://www.sftravel.com/sites/sftraveldev.prod.acquia-sites.com/files/SanFrancisco_0.jpg"
)
City.create!(name: "Chicago", is_major: true, image_url: "https://d3qi0qp55mx5f5.cloudfront.net/www/i/homepage/spotlight/urban-chicago-spotlight.jpg"
)
City.create!(name: "NYC", is_major: true, image_url: "https://cdn.history.com/sites/2/2013/12/new-york-city-H.jpeg"
)
