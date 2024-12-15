import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000/api';

export const fetchKPIs = async () => {
  const response = await axios.get(`${API_BASE_URL}/kpis`);
  return response.data;
};

export const fetchTasks = async () => {
  const response = await axios.get(`${API_BASE_URL}/tasks`);
  return response.data;
};

export const fetchFinancials = async () => {
  const response = await axios.get(`${API_BASE_URL}/financials`);
  return response.data;
};

export const fetchCRMInsights = async () => {
  const response = await axios.get(`${API_BASE_URL}/crm`);
  return response.data;
};
