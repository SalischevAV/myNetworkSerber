const postsRouter = require('express').Router();
const PostApiController = require('../Controller/PostApiController');

postsRouter.get('/', PostApiController.getAll);
postsRouter.post('/', PostApiController.post);

postsRouter.get('/:id', PostApiController.get);
postsRouter.delete('/:id', PostApiController.delete);

module.exports = postsRouter;
