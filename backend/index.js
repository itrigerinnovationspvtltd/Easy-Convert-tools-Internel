const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Backend running 🚀' })
});

app.get('/run-python', (req, res) => {
  const python = spawn('python', ['script.py'], { cwd: __dirname });
  let output = '';
  python.stdout.on('data', d => (output += d));
  python.stderr.on('data', d => console.error(d.toString()));
  python.on('close', () => res.json({ result: output.trim() }));
});

app.listen(5000, () =>
  console.log('✅ Server running on http://localhost:5000')
);
