import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import routes from './routes';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 4000;

const app = express();

mongoose.connect(process.env.MONGO_URL!);
const mongo = mongoose.connection;
mongo.on("error", console.error.bind(console, "connection error:"));
mongo.once("open", function () {
	console.log("Database connected!");
});

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