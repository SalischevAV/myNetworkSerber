const usersRouter = require('./usersRoter');
const postsRouter = require('./postsRouter');
const commentsRouter = require('./commentsRouter');
const albumsRouter = require('./albumsRouter');
const newsRouter = require('./newsRouter')

module.exports = {
    usersRouter: usersRouter,
    postsRouter: postsRouter,
    commentsRouter: commentsRouter,
    albumsRouter: albumsRouter,
    newsRouter: newsRouter,
}