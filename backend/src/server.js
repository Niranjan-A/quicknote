import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

import notesRouter from '../src/routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5501;
const __dirname = path.resolve();

//middleware
if (process.env.NODE_ENV !== 'production') {
  app.use(
    cors({
      origin: 'http://localhost:5173',
    })
  );
}

app.use(express.json());
app.use(rateLimiter);

app.use('/api/v1/notes', notesRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join('__dirname', '../frontend', 'dist', 'index.html'));
  });
}

//Start the server only after DB connection is successful
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}...`);
  });
});
