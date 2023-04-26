import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import routes from './routes';

const PORT = process.env.PORT || 4000;

const app = express();

// Middleware
app.use(cors());

// Routes
app.use('/tasks', routes.tasks);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () =>
  console.log(`Example app is listening on port ${PORT}`)
);

export default app;