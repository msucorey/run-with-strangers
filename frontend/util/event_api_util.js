export const getEvents = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/events'
  });
};

export const getEvent = (id) => {
  return $.ajax({
    method: 'GET',
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
