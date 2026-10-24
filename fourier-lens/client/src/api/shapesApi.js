import httpClient from './httpClient';

export async function fetchShapes(mode = 'normal') {
  let path = '/api/shapes';
  if (mode === 'empty') {
    path = '/api/shapes/empty';
  } else if (mode === 'error') {
    path = '/api/shapes/error';
  }
  const response = await httpClient.get(path);
  return response.data;
}
