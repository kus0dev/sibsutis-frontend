function Switch({ checked, onChange, label }) {
  return (
    <label className="switch">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="switch-slider" />
      {label && <span className="switch-label">{label}</span>}
    </label>
  )
}

export default Switch
