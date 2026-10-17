import { useState } from 'react';
import Button from '@/shared/Button';
import { fetchShapes } from '@/api/shapesApi';

function FetchButton() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetch = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchShapes();
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
      {loading && <p className="message">Loading indicator visible...</p>}
      {error && <p className="message message-warning">Error occurred</p>}
      {data.length > 0 && (
        <div className="library" style={{ marginTop: '10px' }}>
          {data.map((shape, index) => (
            <Button key={index} variant="ghost">
              Item {index + 1}
            </Button>
          ))}
        </div>
      )}
      {data.length === 0 && !loading && !error && (
        <p className="message">No data loaded yet</p>
      )}
    </div>
  );
}

export default FetchButton;
