json.extract! user, :id, :username, :email, :city_id, :is_host,
              :host_image_url, :host_intro, :facebook_url, :twitter_url

json.events do
  json.array! user.events, partial: 'api/events/event.json.jbuilder', as: :event
end

json.run_dates do
  json.array! user.run_dates, partial: 'api/events/event.json.jbuilder', as: :event
end
