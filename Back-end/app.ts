import express, { Request, Response } from 'express';
import cors from 'cors';

// require('./config/database.ts');
require('dotenv').config();
const app = express();
const moviesRouter = require('./routes/movies');
const seriesRouter = require('./routes/series');
const genresRouter = require('./routes/genres');

// ********************************
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:5173'
}))
    .use(express.json())
    .use('/movies', moviesRouter)
    .use('/series', seriesRouter)
    .use('/genres', genresRouter)

app.listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
}).on("error", (error: Error) => {
    throw new Error(error.message);
});
