export const env = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
  username: import.meta.env.VITE_API_USERNAME,
  password: import.meta.env.VITE_API_PASSWORD,
};

if (!env.apiBaseUrl || !env.username || !env.password) {
  throw new Error('Missing API configuration');
}
