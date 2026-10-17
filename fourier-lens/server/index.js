import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// In-memory array for shapes (predefined for demo)
const shapes = [
  [
    { x: 100, y: 100 },
    { x: 150, y: 80 },
    { x: 200, y: 100 },
    { x: 200, y: 150 },
    { x: 150, y: 170 },
    { x: 100, y: 150 },
  ],
  [
    { x: 120, y: 80 },
    { x: 180, y: 80 },
    { x: 180, y: 120 },
    { x: 120, y: 120 },
  ],
  [
    { x: 150, y: 70 },
    { x: 170, y: 90 },
    { x: 190, y: 70 },
    { x: 190, y: 110 },
    { x: 170, y: 130 },
    { x: 150, y: 110 },
  ],
];

app.get('/api/shapes', (req, res) => {
  res.json(shapes);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
