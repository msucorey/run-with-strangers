export const getEvents = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/cities/${id}/events`
  });
};

export const getEvent = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/events/${id}`
  });
};

export const destroyEvent = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/events/${id}`
  });
};

export const createEvent = (event) => {
  return $.ajax({
    method: 'POST',
    url: `api/events/`,
    data: { event }
  });
};

export const updateEvent = (event) => {
  return $.ajax({
    method: 'PATCH',
    url: '/api/events',
    data: { event }
  });
};
