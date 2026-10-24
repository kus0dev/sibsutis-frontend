import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Canvas from '@/components/Canvas'
import Controls from '@/components/Controls'
import Spectrum from '@/components/Spectrum'
import Card from '@/shared/Card'
import Settings from '@/components/Settings'
import { useFourier } from '@/hooks/useFourier'

function DrawPage() {
  const { points, spectrum, addPoint, clear, load } = useFourier()
  const [message, setMessage] = useState('Draw a shape on the canvas.')
  const [warning, setWarning] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.state && Array.isArray(location.state.points)) {
      load(location.state.points)
      setWarning(false)
      setMessage('Shape loaded from history.')
    }
  }, [location.state, load])

  function handleClear() {
    clear()
    setWarning(false)
    setMessage('Canvas cleared.')
  }

  return (
    <div className="container">
      <h1 className="page-title">Fourier Lens</h1>
      <Card title="Draw">
        <Canvas points={points} onAddPoint={addPoint} onClear={handleClear} />
        <Controls
          pointCount={points.length}
          onClear={handleClear}
          onSave={() => {}}
          saving={false}
        />
        <p className={warning ? 'message message-warning' : 'message'}>
          {message}
        </p>
      </Card>
      <Card title="Settings">
        <Settings />
      </Card>
      <Card title="Spectrum">
        <Spectrum spectrum={spectrum} />
      </Card>
    </div>
  )
}

export default DrawPage
