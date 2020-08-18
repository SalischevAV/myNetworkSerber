const User = require('../Model').User;

module.exports.getAll = (req, res, next) => {
    User.find({}, (err, data) => {
        if (data) {
            res.json(data);
        } else {
            next(err);
        }
    });
};

module.exports.get = (req, res, next) => {
    User.findById(req.params.id, (err, data, next) => {
        if (data) {
            res.json(data);
        }
        else {
            next(err);
        }
    });
};

module.exports.post = (req, res, next) => {
    console.dir(req.body);
    User.create(
        {
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
            website: req.body.website,
            firebaseId:req.body.firebaseId,
        }, (err, data) => {
            if (data) {
                console.log('response: ' +data)
                res.status(201);
                res.set('Location', `${req.baseUrl}/${data.id}`);
                res.json(data);
            } else {
                console.log(err)
                next(err);
            }
        }
    )
};