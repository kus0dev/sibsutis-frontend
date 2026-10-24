import { useSettingsStore } from '@/store/settingsStore'
import Button from '@/shared/Button'

function Settings() {
  const showGrid = useSettingsStore((state) => state.showGrid)
  const showSpectrum = useSettingsStore((state) => state.showSpectrum)
  const toggleGrid = useSettingsStore((state) => state.toggleGrid)
  const toggleSpectrum = useSettingsStore((state) => state.toggleSpectrum)

  return (
    <div className="settings">
      <Button variant="ghost" onClick={toggleGrid}>
        Grid: {showGrid ? 'On' : 'Off'}
      </Button>
      <Button variant="ghost" onClick={toggleSpectrum}>
        Spectrum: {showSpectrum ? 'On' : 'Off'}
      </Button>
    </div>
  )
}

export default Settings
