import { useSettingsStore } from '@/store/settingsStore'
import Switch from '@/shared/Switch'

function Settings() {
  const showGrid = useSettingsStore((state) => state.showGrid)
  const showSpectrum = useSettingsStore((state) => state.showSpectrum)
  const toggleGrid = useSettingsStore((state) => state.toggleGrid)
  const toggleSpectrum = useSettingsStore((state) => state.toggleSpectrum)

  return (
    <div className="settings">
      <Switch checked={showGrid} onChange={toggleGrid} label="Grid" />
      <Switch checked={showSpectrum} onChange={toggleSpectrum} label="Spectrum" />
    </div>
  )
}

export default Settings
