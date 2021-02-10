const express = require('express');
const MoviesService = require('../services/movies');
const passport = require('passport');

const { 
    movieIdSchema, 
    createMovieSchema, 
    updateMovieShema
} = require('../utils/schemas/movies');

const validationHandler = require('../utils/middleware/validationHandler');
const scopeValidationHandler = require('../utils/middleware/scopeValidationHandler');

const cacheResponse = require('../utils/cacheResponse');
const { FIVE_MINUTES_IN_SECONDS, SIXTY_MINUTES_IN_SECONDS } = require('../utils/time');

// JWT strategy
require('../utils/auth/strategies/jwt');

function moviesApi(app) {
    const router = express.Router();
    app.use('/api/movies',router);

    const moviesService = new MoviesService();
    
    router.get(
        '/', 
        passport.authenticate('jwt', { session: false }),
        scopeValidationHandler(['read:movies']),
        async function (req,res,next) {
        cacheResponse(res,FIVE_MINUTES_IN_SECONDS);

        const { tags } = req.query;

        try {
            const movies = await moviesService.getMovies({ tags });
      
            res.status(200).json({
                data: movies,
                rows: Object.keys(movies).length,
                message: 'movies listed'
            });
        } catch (error) {
            next(error);
        }
    });

    router.get(
        '/:movieId',
        passport.authenticate('jwt', { session: false }), 
        scopeValidationHandler(['read:movies']),
        validationHandler({ movieId: movieIdSchema }, 'params'),
        async function (req,res,next) {
            cacheResponse(res,SIXTY_MINUTES_IN_SECONDS);

            const { movieId } = req.params;

            try {
                const movie = await moviesService.getMovie({movieId});

                // throw new Error('Error getting movie');
        
                res.status(200).json({
                    data: movie,
                    message: 'movie retrieved'
                });
            } catch (error) {
                next(error);
            }
        }
    );

    router.post(
        '/', 
        passport.authenticate('jwt', { session: false }), 
        scopeValidationHandler(['create:movies']),
        validationHandler(createMovieSchema), 
        async function (req,res,next) {
            const { body: movie } = req;

            try {
                const created = await moviesService.createMovie({ movie });

                res.status(201).json({
                    data: created,
                    message: 'movie created'
                });
            } catch (error) {
                next(error);
            }
        }
    );

    router.put(
        '/:movieId', 
        passport.authenticate('jwt', { session: false }), 
        scopeValidationHandler(['update:movies']),
        validationHandler({ movieId: movieIdSchema }, 'params'), 
        validationHandler(updateMovieShema), 
        async function (req,res,next) {
            const { movieId } = req.params;
            const { body: movie } = req;

            try {
                const updated = await moviesService.updateMovie({ movieId, movie });
        
                res.status(200).json({
                    data: updated,
                    message: 'movie updated'
                });
            } catch (error) {
                next(error);
            }
        }
    );

    router.delete(
        '/:movieId', 
        passport.authenticate('jwt', { session: false }), 
        scopeValidationHandler(['delete:movies']),
        validationHandler({ movieId: movieIdSchema }, 'params'), 
        async function (req,res,next) {
            const { movieId } = req.params;

            try {
                const deleted = await moviesService.deleteMovie({ movieId });
        
                res.status(200).json({
                    data: deleted,
                    message: 'movie deleted'
                });
            } catch (error) {
                next(error);
            }
        }
    );
}

module.exports = moviesApi;