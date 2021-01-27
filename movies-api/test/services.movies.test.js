const assert = require('assert');
const proxyquire = require('proxyquire');

const { getAllStub, MongoLibMock } = require('../utils/mocks/mongoLib');
const { moviesMock } = require('../utils/mocks/movies');

describe('services - movies', function () {
    const MoviesService = proxyquire('../services/movies', {
        '../lib/mongo': MongoLibMock
    });
    
    const moviesService = new MoviesService();
    
    describe('when getMovies method is called', async function () {
        it('should call the getAll MongoLib method', async function () {
            await moviesService.getMovies({});
            assert.strictEqual(getAllStub.called, true);
        });

        it('should return an array of movies', async function(){
            const result = await moviesService.getMovies({});
            const expected = moviesMock;

            assert.deepEqual(result,expected);
        });
    });

    
});