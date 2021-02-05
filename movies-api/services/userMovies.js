const MongoLib = require('../lib/mongo');

class UserMoviesService {
    constructor() {
        this.collection = 'user-movies';
        this.MongoDB = new MongoLib();
    }

    async getUserMovies({ userId }) {
        const query = userId && { userId };
        const userMovies = await this.MongoDB.getAll(this.collection, query);
        return userMovies || [];
    }

    async createUserMovie({ userMovie }){
        const createdUserMoviesId = await this.MongoDB.create(this.collection, userMovie);
        return createdUserMoviesId;
    }

    async deleteUserMovie({ userMovieId }){
        const deletedUserMovieId = await this.MongoDB.delete(
            this.collection,
            userMovieId
        );

        return deletedUserMovieId;
    }
}

module.exports = UserMoviesService;