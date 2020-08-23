const newsRouter = require('express').Router();
const NewsApiController = require('../Controller/NewsApiController');

newsRouter.get('/', NewsApiController.getAll);

module.exports = newsRouter;