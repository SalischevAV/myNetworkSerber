const User = require('../Model').User;

module.exports.getAll = (req, res, next) => {
    User.countDocuments({}, (err, total_count)=>{
        User.find({}).skip((req.query.page-1)*req.query.limit).limit(Number(req.query.limit)).sort({_id: -1}).exec((err, users) => {
            if (users) {
                res.status(200);
                res.json({total_count, users});
            } else {
                next(err);
            }
        });
    });       
}

module.exports.get = (req, res, next) => {
    User.findById(req.params.id, (err, data) => {
        if (data) {
            res.status(200);
            res.json(data);
        }
        else {
            next(err);
        }
    });
};

module.exports.getFirebaseUser=(req, res, next)=>{
    User.findOne({firebaseId:req.params.id}, (err, data)=>{
        if(data){
            res.status(200);
            res.json(data);
        } else{
            console.log(err);
            next(err);
        }
    });
};

module.exports.post = (req, res, next) => {
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
                res.status(201);
                res.set('Location', `${req.baseUrl}/${data.id}`);
                res.json(data);
            } else {
                next(err);
            }
        }
    )
};