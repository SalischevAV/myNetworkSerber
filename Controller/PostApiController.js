const Post = require('../Model').Post;
const mongodb = require('mongodb');

module.exports.getAll = (req, res, next) => {
    Post.find({}, (err, data) => {
        if (data) {
            res.json(data);
        } else {
            next(err);
        }
    });
}

module.exports.get = (req, res, next) => {
    Post.findById(req.params.id, (err, data) => {
        if (data) {
            res.json(data);
        } else {
            next(err);
        }
    })
}

module.exports.post = (req, res, next) => {
    Post.create(
        {
            userId: mongodb.ObjectId(req.body.userId),
            title: req.body.title,
            body: req.body.body,

        }, (err, data) => {
            if (data) {
                res.status(201);
                res.set('Location', `${req.baseUrl}/${data.id}`);
                res.json(data);
            } else {
                next(err);
            }
        }
    )
};

module.exports.delete = (req, res, next) => {
    Post.findByIdAndDelete(req.params.id, (err, deletedData) => {
        if (err) {
            next(err);
        } else {
            res.status(200);
            res.set('Access-Control-Allow-Methods', 'PUT,PATCH,DELETE');
            res.set('Access-Control-Allow-Headers', 'Content-Type');
            res.set('Access-Control-Allow-Origin', '*');
            res.status(204);
            res.end();
        }
    })
};


