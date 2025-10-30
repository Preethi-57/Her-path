import axios from 'axios';
const api = axios.create({ baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api' });

export const getResources = () => api.get('/resources');
export const getSchemes = () => api.get('/chemes' ? '/schemes' : '/schemes');
export const getJobs = () => api.get('/jobs');
export const login = (data) => api.post('/auth/login', data);
export const register = (data) => api.post('/auth/register', data);

export default api;
