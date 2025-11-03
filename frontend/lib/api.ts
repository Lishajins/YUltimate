import axios from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = Cookies.get('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const auth = {
  signup: (data: any) => api.post('/auth/signup', data),
  signin: (data: any) => api.post('/auth/signin', data),
  getProfile: () => api.get('/auth/profile'),
};

export const tournaments = {
  getAll: () => api.get('/tournaments'),
  getById: (id: string) => api.get(`/tournaments/${id}`),
  create: (data: any) => api.post('/tournaments', data),
  createTeam: (data: any) => api.post('/tournaments/teams', data),
  createPlayer: (data: any) => api.post('/tournaments/players', data),
  updateSpiritScore: (teamId: string, data: any) => api.patch(`/tournaments/teams/${teamId}/spirit-score`, data),
  getLeaderboard: (id: string) => api.get(`/tournaments/${id}/leaderboard`),
};

export const coaching = {
  createChild: (data: any) => api.post('/coaching/children', data),
  getChildren: () => api.get('/coaching/children'),
  createSession: (data: any) => api.post('/coaching/sessions', data),
  getSessions: () => api.get('/coaching/sessions'),
  markAttendance: (data: any) => api.post('/coaching/attendance', data),
  createAssessment: (data: any) => api.post('/coaching/assessments', data),
  getAssessments: (childId: string) => api.get(`/coaching/assessments/${childId}`),
  createHomeVisit: (data: any) => api.post('/coaching/home-visits', data),
  getHomeVisits: () => api.get('/coaching/home-visits'),
  getReports: () => api.get('/coaching/reports'),
};

export const gallery = {
  getAll: () => api.get('/gallery'),
  upload: (data: any) => api.post('/gallery', data),
  togglePin: (id: string) => api.patch(`/gallery/${id}/pin`),
  detectFaces: (data: any) => api.post('/gallery/detect-faces', data),
};