import Button from '@/shared/Button'

function History({ shapes, loading, error, saving, onLoad, onReload, onClear }) {
  if (loading) {
    return <p className="message">Loading shapes...</p>
  }

  if (error) {
    return (
      <div>
        <p className="message message-warning">Error loading shapes from API.</p>
        <Button onClick={() => onReload && onReload()}>Retry</Button>
      </div>
    )
  }

  if (!shapes || shapes.length === 0) {
    return <p className="empty">No shapes yet. Draw and press Save shape.</p>
  }

  return (
    <div className="history">
      <div className="library">
        {shapes.map((shape) => (
          <Button key={shape.id} variant="ghost" onClick={() => onLoad(shape.points)}>
            {shape.name}
          </Button>
        ))}
      </div>
      <div className="controls">
        <Button onClick={onClear} disabled={saving}>
          Clear history
        </Button>
      </div>
    </div>
  )
}

export default History
