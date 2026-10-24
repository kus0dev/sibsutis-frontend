import { useState } from 'react';
import Button from '@/shared/Button';
import { fetchShapes } from '@/api/shapesApi';

function FetchButton({ onLoad }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetch = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchShapes('normal');
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button onClick={handleFetch} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Shapes'}
      </Button>
      {loading && <p className="message">Loading...</p>}
      {error && <p className="message message-warning">Error occurred</p>}
      {!loading && !error && data.length === 0 && (
        <p className="message">No data loaded yet</p>
      )}
      {!loading && !error && data.length > 0 && (
        <div className="library" style={{ marginTop: '10px' }}>
          {data.map((shape) => (
            <Button
              key={shape.id}
              variant="ghost"
              onClick={() => onLoad && onLoad(shape.points)}
            >
              {shape.name}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

export default FetchButton;
