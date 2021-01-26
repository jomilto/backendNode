const assert = require('assert');
const proxyquire = require('proxyquire');

const { moviesMock, MoviesServiceMock } = require('../utils/mocks/movies');
const testServer = require('../utils/testServer');

describe('routes - movies', function () {
    const route = proxyquire('../routes/movies', {
        '../services/movies': MoviesServiceMock
    });

    const request = testServer(route);

    describe('GET /movies', function () {
        it('should response with status 200', function (done) {
            request.get('/api/movies').expect(200,done);
        });

        it('should response with the list of movies', function (done) {
            request.get('/api/movies').end((err,res) => {
                assert.deepEqual(res.body, {
                    data: moviesMock,
                    rows: Object.keys(moviesMock).length,
                    message: 'movies listed'
                });
                done();
            });
        });
    });
});