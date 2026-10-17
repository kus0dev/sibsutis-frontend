import httpClient from './httpClient';

export async function fetchShapes() {
  const response = await httpClient.get('/api/shapes');
  return response.data;
}
