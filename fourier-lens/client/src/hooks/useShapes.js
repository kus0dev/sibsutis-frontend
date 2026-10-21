import { useEffect, useState } from 'react';
import { fetchShapes } from '@/api/shapesApi';

export function useShapes() {
  const [shapes, setShapes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadShapes = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchShapes();
      setShapes(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadShapes();
  }, []);

  return { shapes, loading, error, reload: loadShapes };
}
