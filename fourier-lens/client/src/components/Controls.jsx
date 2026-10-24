import Button from '@/shared/Button'

function Controls({ pointCount, onClear, onSave, saving }) {
  return (
    <div className="controls">
      <Button onClick={onClear} variant="ghost" disabled={pointCount === 0}>
        Clear
      </Button>
      <Button onClick={onSave} disabled={pointCount < 3 || saving}>
        {saving ? 'Saving...' : 'Save shape'}
      </Button>
      <span className="counter">{pointCount} points</span>
    </div>
  )
}

export default Controls
