import { Routes, Route, NavLink } from 'react-router-dom'
import DrawPage from '@/pages/DrawPage'
import HistoryPage from '@/pages/HistoryPage'
import NotFound from '@/pages/NotFound'
import './App.css'

function App() {
  return (
    <div className="container">
      <nav className="nav">
        <NavLink to="/" end>
          Draw
        </NavLink>
        <NavLink to="/history">History</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<DrawPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
