const express = require('express');
const helmet = require('helmet');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');
const userMoviesApi = require('./routes/userMovies');
const authApi = require('./routes/auth');

const { logErrors, wrapErrors, errorHandler } = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

// middleware de body parser
app.use(express.json());
app.use(helmet());

// routes
authApi(app);
moviesApi(app);
userMoviesApi(app);
// catch 404
app.use(notFoundHandler);


// Error middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
    console.log(`Listening in http://localhost:${config.port}/`);
});