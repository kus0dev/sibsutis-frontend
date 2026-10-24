import { useSettingsStore } from '@/store/settingsStore'
import Switch from '@/shared/Switch'

function Settings() {
  const showGrid = useSettingsStore((state) => state.showGrid)
  const showSpectrum = useSettingsStore((state) => state.showSpectrum)
  const toggleGrid = useSettingsStore((state) => state.toggleGrid)
  const toggleSpectrum = useSettingsStore((state) => state.toggleSpectrum)

  return (
    <div className="settings">
      <div className="setting-row">
        <span>Grid</span>
        <Switch checked={showGrid} onChange={toggleGrid} />
      </div>
      <div className="setting-row">
        <span>Spectrum</span>
        <Switch checked={showSpectrum} onChange={toggleSpectrum} />
      </div>
    </div>
  )
}

export default Settings
