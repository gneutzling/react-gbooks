import 'whatwg-fetch';

// @TODO: Use a library for this or find a better way to define these helpers.
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response ? response.json() : {};
}


export default {
  post(url, payload = {}) {
    return fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: payload ? JSON.stringify(payload) : undefined,
    }).then(checkStatus).then(parseJSON);
  },

  get(url) {
    return fetch(url, {
      method: 'GET',
    }).then(checkStatus).then(parseJSON);
  },

  delete(url) {
    return fetch(url, {
      method: 'DELETE',
      credentials: 'include',
    });
  },
};
