import Button from '@/shared/Button';

function ApiShapes({ shapes, loading, error, onReload }) {
  if (loading) {
    return <p className="message">Loading shapes...</p>;
  }

  if (error) {
    return (
      <div>
        <p className="message message-warning">Error loading shapes from API.</p>
        <Button onClick={onReload}>Retry</Button>
      </div>
    );
  }

  if (!shapes || shapes.length === 0) {
    return <p className="empty">No shapes available from API.</p>;
  }

  return (
    <div className="history">
      <div className="library">
        {shapes.map((shape, index) => (
          <Button key={index} variant="ghost">
            API Shape {index + 1} ({shape.length} points)
          </Button>
        ))}
      </div>
    </div>
  );
}

export default ApiShapes;
