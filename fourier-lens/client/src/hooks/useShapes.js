import { useEffect, useState } from 'react';
import { fetchShapes } from '@/api/shapesApi';

export function useShapes() {
  const [shapes, setShapes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mode, setMode] = useState('normal');
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    let cancelled = false;

    const loadShapes = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchShapes(mode);
        if (!cancelled) {
          setShapes(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadShapes();

    return () => {
      cancelled = true;
    };
  }, [mode, refresh]);

  const reload = (nextMode) => {
    if (nextMode !== undefined && nextMode !== null) {
      if (nextMode !== mode) {
        setMode(nextMode);
        return;
      }
    }
    setRefresh((r) => r + 1);
  };

  return { shapes, loading, error, reload };
}
