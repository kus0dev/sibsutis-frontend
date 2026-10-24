import httpClient from './httpClient';

export async function fetchShapes() {
  const response = await httpClient.get('/api/shapes');
  return response.data;
}

export async function saveShape(name, points) {
  const response = await httpClient.post('/api/shapes', { name, points });
  return response.data;
}
