import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// In-memory array for shapes (predefined for demo)
const shapes = [
  {
    id: 'triangle-1',
    name: 'Triangle',
    points: [
      { x: 100, y: 100 },
      { x: 150, y: 80 },
      { x: 200, y: 100 },
      { x: 200, y: 150 },
      { x: 150, y: 170 },
      { x: 100, y: 150 },
    ],
  },
  {
    id: 'square-1',
    name: 'Square',
    points: [
      { x: 120, y: 80 },
      { x: 180, y: 80 },
      { x: 180, y: 120 },
      { x: 120, y: 120 },
    ],
  },
  {
    id: 'star-1',
    name: 'Star',
    points: [
      { x: 150, y: 70 },
      { x: 170, y: 90 },
      { x: 190, y: 70 },
      { x: 190, y: 110 },
      { x: 170, y: 130 },
      { x: 150, y: 110 },
    ],
  },
];

app.get('/api/shapes', (req, res) => {
  res.json(shapes);
});

app.get('/api/shapes/empty', (req, res) => {
  res.json([]);
});

app.get('/api/shapes/error', (req, res) => {
  res.status(500).json({ message: 'Simulated error' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
