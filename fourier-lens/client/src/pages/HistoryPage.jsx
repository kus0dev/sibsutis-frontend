import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import History from '@/components/History'
import Card from '@/shared/Card'
import { useShapesQuery } from '@/hooks/useShapesQuery'

function HistoryPage() {
  const { shapes, loading, error, saving, reload, clear: clearShapes } = useShapesQuery()
  const navigate = useNavigate()
  const [message, setMessage] = useState('')

  function handleLoad(shapePoints) {
    navigate('/', { state: { points: shapePoints } })
    setMessage('Loaded shape, go to Draw page.')
  }

  function handleClearHistory() {
    clearShapes()
    setMessage('History cleared.')
  }

  return (
    <div className="container">
      <h1 className="page-title">Fourier Lens</h1>
      <Card title="History">
        <History
          shapes={shapes}
          loading={loading}
          error={error}
          saving={saving}
          onLoad={handleLoad}
          onReload={reload}
          onClear={handleClearHistory}
        />
        {message && <p className="message">{message}</p>}
      </Card>
    </div>
  )
}

export default HistoryPage
