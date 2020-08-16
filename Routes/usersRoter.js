const usersRouter = require('express').Router();
const UserApiController = require('../Controller/UserApiController')


usersRouter.get('/', UserApiController.getAll);
usersRouter.post('/', UserApiController.post);

usersRouter.get('/:id', UserApiController.get);

module.exports = usersRouter;
