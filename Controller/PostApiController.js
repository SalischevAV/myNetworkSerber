const Post = require('../Model').Post;

module.exports.getAll = (req, res) =>{
    Post.find({}, (err, data)=>{
        if(data){
            res.json(data);
        } else {
            next(err);
        }
    });
}

module.exports.get = (req, res) =>{
    Post.findById(req.params.id, (err, data, next)=>{
        if(data){
            res.json(data);
        } else {
            next(err);
        }
    })
}

module.exports.post = (req, res) => {
    Post.create(
        {
            userId: req.body.userId,
            title: req.body.title,
            body: req.body.body,

        }, (err, data, next) =>{
            if(data){
                res.status(200);
                res.set('Location', `${req.baseUrl}/${data.id}`);
                res.json(data);
            } else {
               next(err);
            }
        }
    )
};

module.exports.delete = (req, res)=>{
    Post.findByIdAndDelete(req.params.id, (err, deletedData)=>{
        if(err){
            next(err);
        } else {
            res.status(200);
            res.end();
        }
    })
};


/*
Post.updateMany({userId:10}, {$set:{userId: '5f3845a71b19eb3984d023a4'}}, {upsert: true}, (err, res)=>{
        if(res){
            console.dir(res);
            //res.end()
        } else if (err)
        {
            console.log('err:' + err)
            //res.end()
        }
    })
*/