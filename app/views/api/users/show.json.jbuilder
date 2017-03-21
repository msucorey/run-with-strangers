json.partial! "api/users/user", user: @user

json.events do
  json.array! @user.events, partial: 'api/events/event', as: :event
end

json.run_dates do
  json.array! @user.run_dates, partial: 'api/events/event', as: :event
end
