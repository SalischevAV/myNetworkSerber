const commentsRouter = require('express').Router();
const CommentApiController = require('../Controller').CommentApiController;

commentsRouter.get('/', CommentApiController.getAll);
commentsRouter.post('/', CommentApiController.post);

commentsRouter.get('/:id', CommentApiController.get);
commentsRouter.delete('/:id', CommentApiController.delete);

module.exports = commentsRouter;
