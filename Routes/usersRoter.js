const express = require('express');
const UserApiController = require('../Controller/UserApiController')

const usersRouter = express.Router();

usersRouter.get('/', UserApiController.getAll);
usersRouter.post('/', UserApiController.post);

usersRouter.get('/:id', UserApiController.get);

module.exports = usersRouter;
