import Button from '@/shared/Button';

function ApiShapes({ shapes, loading, error, onReload, onLoad }) {
  if (loading) {
    return <p className="message">Loading shapes...</p>;
  }

  if (error) {
    return (
      <div>
        <p className="message message-warning">Error loading shapes from API.</p>
        <Button onClick={() => onReload && onReload()}>Retry</Button>
      </div>
    );
  }

  if (!shapes || shapes.length === 0) {
    return <p className="empty">No shapes available from API.</p>;
  }

  return (
    <div className="history">
      <div className="library">
        {shapes.map((shape) => (
          <Button
            key={shape.id}
            variant="ghost"
            onClick={() => onLoad && onLoad(shape.points)}
          >
            {shape.name}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default ApiShapes;
