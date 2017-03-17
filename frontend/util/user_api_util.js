
export const patchCityId = (user) => {
  return $.ajax({
    method: 'PATCH',
    url: '/api/user',
    data: { user }
  });
};
