const Comment = require('../Model').Comment;

module.exports.getAll = (req, res, next) => {
    Comment.countDocuments({}, (err, total_count)=>{
        Comment.find({}).skip((req.query.page-1)*req.query.limit).limit(Number(req.query.limit)).sort({_id: -1}).exec((err, comments) => {
            if (comments) {
                res.status(200);
                res.json({total_count, comments});
            } else {
                next(err);
            }
        });
    });       
}

module.exports.get = (req, res, next)=>{
    Comment.findById(req.params.id, (err,data)=>{
        if(data){
            res.status(200);
            res.json(data);
        } else{
            next(err);
        }
    });
};

module.exports.post = (req, res, next)=>{
    Comment.create({
        postId: req.body.postId,
        name: req.body.name,
        email: req.body.email,
        body: req.body.body,
    }), (err, data) =>{
        if(data){
            res.status(201);
            res.set('Location', `${req.baseUrl}/${data.id}`);
            res.send(data);
        } else{
            next(err);
        }
    };
};

module.exports.delete = (req, res, next)=>{
    Comment.findByIdAndDelete(req.params.id, (err, data)=>{
        if(data){
            res.status(204);
            res.end();
        } else {
            next(err);
        }
    });
};