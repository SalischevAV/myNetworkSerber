const albumsRouter = require('express').Router();
const AlbumApiController = require('../Controller').AlbumApiController;

albumsRouter.get('/', AlbumApiController.getAll);
albumsRouter.post('/', AlbumApiController.post);

albumsRouter.get('/:id', AlbumApiController.get);
albumsRouter.delete('/id', AlbumApiController.delete);

module.exports = albumsRouter;