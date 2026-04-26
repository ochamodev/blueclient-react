import { env } from '@/config/env';
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: env.apiBaseUrl,
  timeout: 5000,
  auth: {
    username: env.username,
    password: env.password,
  },
});
