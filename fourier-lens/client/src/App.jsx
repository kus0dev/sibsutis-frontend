import { useState } from 'react'
import Canvas from '@/components/Canvas'
import Controls from '@/components/Controls'
import History from '@/components/History'
import Spectrum from '@/components/Spectrum'
import FetchButton from '@/components/FetchButton'
import Card from '@/shared/Card'
import { useFourier } from '@/hooks/useFourier'
import { useShapes } from '@/hooks/useShapes'
import './App.css'

function App() {
  const { points, spectrum, addPoint, clear, load } = useFourier()
  const { shapes, loading, error, saving, reload, save, clear } = useShapes()
  const [message, setMessage] = useState('Draw a shape on the canvas.')
  const [warning, setWarning] = useState(false)

  async function handleSave() {
    if (points.length < 3) {
      setWarning(true)
      setMessage('Draw at least 3 points to save.')
      return
    }
    try {
      await save(points)
      setWarning(false)
      setMessage('Saved to server.')
    } catch {
      setWarning(true)
      setMessage('Failed to save. Check server.')
    }
  }

  function handleClear() {
    clear()
    setWarning(false)
    setMessage('Canvas cleared.')
  }

  function handleLoad(shapePoints) {
    load(shapePoints)
    setWarning(false)
    setMessage('Shape loaded from history.')
  }

  function handleClearHistory() {
    clear()
    setWarning(false)
    setMessage('History cleared.')
  }

  return (
    <div className="container">
      <h1 className="page-title">Fourier Lens</h1>

      <Card title="Draw">
        <Canvas points={points} onAddPoint={addPoint} onClear={handleClear} />
        <Controls
          pointCount={points.length}
          onClear={handleClear}
          onSave={handleSave}
          saving={saving}
        />
        <p className={warning ? 'message message-warning' : 'message'}>
          {message}
        </p>
      </Card>

      <Card title="Spectrum">
        <Spectrum spectrum={spectrum} />
      </Card>

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
      </Card>

      <Card title="API Fetch (button)">
        <FetchButton onLoad={handleLoad} />
      </Card>
    </div>
  )
}

export default App
