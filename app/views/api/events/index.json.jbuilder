# json.array! @events, :id, :details, :address, :date, :time, :host_id

json.array!(@events) do |event|
  json.partial! "api/events/event", event: event
  json.attendees do
    json.array! event.attendees, partial: 'api/users/user', as: :user
  end
end
