import 'dotenv/config';

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import routes from './routes';

const port = process.env.PORT || 4000;

const app = express();

// Database connection
mongoose.connect(process.env.MONGO_URL!);
const mongo = mongoose.connection;
mongo.on("error", console.error.bind(console, "Connection error:"));
mongo.once("open", function () {
	console.log("Database connected!");
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/categories', routes.categories);
app.use('/tasks', routes.tasks);

app.listen(port, () =>
  console.log(`Listening on port ${port}`)
);

export default app;