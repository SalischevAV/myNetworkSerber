const Post = require('../Model').Post;
const mongodb = require('mongodb');

module.exports.getAll = (req, res, next) => {
        Post.countDocuments({}, (err, total_count)=>{
            Post.find({}).skip((req.query.page-1)*req.query.limit).limit(Number(req.query.limit)).sort({_id: -1}).exec((err, posts) => {
                if (posts) {
                    res.status(200);
                    res.json({total_count, posts});
                } else {
                    next(err);
                }
            });
        });       
    }

module.exports.get = (req, res, next) => {
    Post.findById(req.params.id, (err, data) => {
        if (data) {
            res.status(200);
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
            res.status(204);
            res.end();
        }
    })
};


