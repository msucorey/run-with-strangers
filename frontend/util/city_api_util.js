export const cities = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/cities'
  });
};

export const city = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/cities/${id}`
  });
};
