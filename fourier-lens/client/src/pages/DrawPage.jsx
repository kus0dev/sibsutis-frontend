import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Canvas from '@/components/Canvas'
import Controls from '@/components/Controls'
import Spectrum from '@/components/Spectrum'
import Card from '@/shared/Card'
import Settings from '@/components/Settings'
import { useFourier } from '@/hooks/useFourier'
import { useShapesQuery } from '@/hooks/useShapesQuery'
import { useSettingsStore } from '@/store/settingsStore'

function DrawPage() {
  const { points, spectrum, addPoint, clear, load } = useFourier()
  const { save, saving } = useShapesQuery()
  const [message, setMessage] = useState('Draw a shape on the canvas.')
  const [warning, setWarning] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const showSpectrum = useSettingsStore((state) => state.showSpectrum)

  useEffect(() => {
    if (location.state && Array.isArray(location.state.points)) {
      load(location.state.points)
      setWarning(false)
      setMessage('Shape loaded from history.')
      navigate(location.pathname, { replace: true, state: null })
    }
  }, [location.state, load, navigate, location.pathname])

  function handleClear() {
    clear()
    setWarning(false)
    setMessage('Canvas cleared.')
  }

  async function handleSave() {
    if (points.length < 3) {
      setWarning(true)
      setMessage('Draw at least 3 points to save.')
      return
    }
    try {
      await save(points)
      setWarning(false)
      setMessage('Shape saved.')
      alert('Shape saved.')
    } catch {
      setWarning(true)
      setMessage('Failed to save. Check server.')
      alert('Failed to save. Check server.')
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
          saving={saving}
        />
        <p className={warning ? 'message message-warning' : 'message'}>
          {message}
        </p>
      </Card>
      <Card title="Settings">
        <Settings />
      </Card>
      <Card title="Spectrum">
        {!showSpectrum ? <p className="empty">Spectrum disabled.</p> : <Spectrum spectrum={spectrum} />}
      </Card>
    </div>
  )
}

export default DrawPage
