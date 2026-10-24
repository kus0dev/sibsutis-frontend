import { Link } from 'react-router-dom'
import Card from '@/shared/Card'

function NotFound() {
  return (
    <div className="container">
      <h1 className="page-title">Fourier Lens</h1>
      <Card title="Not found">
        <p className="message">Unknown address.</p>
        <Link to="/">Go to Draw</Link>
      </Card>
    </div>
  )
}

export default NotFound
