json.partial! "api/users/user", user: @user

json.events do
  json.array! @user.events, partial: 'api/events/event', as: :event
end
