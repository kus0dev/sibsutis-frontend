import Button from '@/shared/Button';

function ApiShapes({ shapes, loading, error, onReload, onLoad }) {
  if (loading) {
    return <p className="message">Loading shapes...</p>;
  }

  if (error) {
    return (
      <div>
        <p className="message message-warning">Error loading shapes from API.</p>
        <Button onClick={() => onReload()}>Retry</Button>
      </div>
    );
  }

  if (!shapes || shapes.length === 0) {
    return (
      <div>
        <p className="empty">No shapes available from API.</p>
        {/* dev-инструмент для защиты лабы, не продакшн */}
        <div className="controls">
          <Button variant="ghost" onClick={() => onReload('normal')}>
            Normal
          </Button>
          <Button variant="ghost" onClick={() => onReload('empty')}>
            Empty
          </Button>
          <Button variant="ghost" onClick={() => onReload('error')}>
            Error
          </Button>
        </div>
      </div>
    );
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
      {/* dev-инструмент для защиты лабы, не продакшн */}
      <div className="controls">
        <Button variant="ghost" onClick={() => onReload('normal')}>
          Normal
        </Button>
        <Button variant="ghost" onClick={() => onReload('empty')}>
          Empty
        </Button>
        <Button variant="ghost" onClick={() => onReload('error')}>
          Error
        </Button>
      </div>
    </div>
  );
}

export default ApiShapes;
