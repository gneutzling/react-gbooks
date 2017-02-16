const BACKEND_DOMAIN = process.env.BACKEND_DOMAIN || 'https://www.googleapis.com/books/v1/volumes';

export default {
  SERVER_URL: `${BACKEND_DOMAIN}`,
  API_URL: `${BACKEND_DOMAIN}`,
};
