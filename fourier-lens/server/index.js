import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

let shapes = [];
let nextId = 1;

app.get('/api/shapes', (req, res) => {
  res.json(shapes);
});

app.post('/api/shapes', (req, res) => {
  const { name, points } = req.body || {};
  if (!Array.isArray(points) || points.length < 3) {
    return res.status(400).json({ message: 'Invalid points' });
  }
  const shapeName = name && String(name).trim() ? String(name).trim() : `Shape ${shapes.length + 1}`;
  const shape = {
    id: String(nextId++),
    name: shapeName,
    points,
  };
  shapes.push(shape);
  return res.status(201).json(shape);
});

app.delete('/api/shapes', (req, res) => {
  shapes = [];
  return res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
