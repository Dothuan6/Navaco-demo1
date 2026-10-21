import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Health check endpoint for Cloud Run
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'NAVACO' });
});

// Serve static files from dist
app.use(express.static(path.join(__dirname, 'dist')));

// Serve assets from public if not in dist
app.use(express.static(path.join(__dirname, 'public')));

// SPA client-side fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`NAVACO server listening on port ${port}`);
});
