import { useEffect, useState } from 'react';
import { fetchShapes, saveShape as saveShapeApi, clearShapes as clearShapesApi } from '@/api/shapesApi';

export function useShapes() {
  const [shapes, setShapes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  const loadShapes = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchShapes();
      setShapes(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadShapes();
  }, []);

  const reload = () => {
    loadShapes();
  };

  const save = async (points) => {
    setSaving(true);
    setError(null);
    try {
      await saveShapeApi(points);
      await loadShapes();
    } catch (err) {
      setError(err);
    } finally {
      setSaving(false);
    }
  };

  const clear = async () => {
    try {
      await clearShapesApi();
      await loadShapes();
    } catch (err) {
      setError(err);
    }
  };

  return { shapes, loading, error, saving, reload, save, clear };
}
