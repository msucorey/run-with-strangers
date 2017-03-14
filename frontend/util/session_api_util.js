export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/user',
    data: user
  });
};

export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  });
};

export const logout = () => {
  return $.ajax({
    method: 'delete',
    url: '/api/session'
  });
};

// signup: should make an AJAX request that creates a new user.
// login: should make an AJAX request that creates a new session.
// logout: should make an AJAX request that deletes the current session.
