import { useState } from 'react'
import Canvas from '@/components/Canvas'
import Controls from '@/components/Controls'
import History from '@/components/History'
import Spectrum from '@/components/Spectrum'
import ApiShapes from '@/components/ApiShapes'
import FetchButton from '@/components/FetchButton'
import Card from '@/shared/Card'
import { useFourier } from '@/hooks/useFourier'
import { useShapeHistory } from '@/hooks/useShapeHistory'
import { useShapes } from '@/hooks/useShapes'
import { saveShape } from '@/api/shapesApi'
import './App.css'

function App() {
  const { points, spectrum, addPoint, clear, load } = useFourier()
  const { shapes, push, reset, limit } = useShapeHistory()
  const { shapes: apiShapes, loading, error, reload } = useShapes()
  const [message, setMessage] = useState('Draw a shape on the canvas.')
  const [warning, setWarning] = useState(false)

  function handleSave() {
    const willDropOldest = shapes.length >= limit
    push(points)
    setWarning(willDropOldest)
    setMessage(
      willDropOldest
        ? `History is full. The first shape was removed to store the new one.`
        : 'Saved to history.',
    )
  }

  function handleClear() {
    clear()
    setWarning(false)
    setMessage('Canvas cleared.')
  }

  function handleLoad(shape) {
    load(shape)
    setWarning(false)
    setMessage('Shape loaded from history.')
  }

  function handleClearHistory() {
    reset()
    setWarning(false)
    setMessage('History cleared.')
  }

  function handleLoadFromApi(pointsToLoad) {
    load(pointsToLoad)
    setWarning(false)
    setMessage('Shape loaded from API')
  }

  async function handleSaveToServer() {
    if (points.length < 3) {
      setWarning(true)
      setMessage('Draw at least 3 points to save.')
      return
    }
    try {
      await saveShape(`Shape ${Date.now()}`, points)
      setWarning(false)
      setMessage('Saved to server.')
      if (reload) {
        reload()
      }
    } catch {
      setWarning(true)
      setMessage('Failed to save to server.')
    }
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
        />
        <div className="controls">
          <button className="btn" onClick={handleSaveToServer}>
            Save to server
          </button>
        </div>
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
          limit={limit}
          onLoad={handleLoad}
          onClear={handleClearHistory}
        />
      </Card>

      <Card title="API Shapes">
        <ApiShapes
          shapes={apiShapes}
          loading={loading}
          error={error}
          onReload={reload}
          onLoad={handleLoadFromApi}
        />
      </Card>

      <Card title="API Fetch (button)">
        <FetchButton onLoad={handleLoadFromApi} />
      </Card>
    </div>
  )
}

export default App
