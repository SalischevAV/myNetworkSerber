const Post = require('../Model').Post;


module.exports.getAll = (req, res, next)=> {
        Post.countDocuments({}, (err, total_count)=>{
        Post.aggregate([
                {
                        $lookup: {
                                from: 'users',
                                localField: 'userId',
                                foreignField: '_id',
                                as: 'user'
                        }
                },
                {
                        $lookup:{
                        from: 'comments',
                        localField: '_id',
                        foreignField: 'postId',
                        as: 'comments'
                        }
                }
                ])
                .skip((req.query.page-1)*req.query.limit)
                .limit(Number(req.query.limit))
                .sort({_id: -1})
                .exec((err, data)=>{
                        if (data) {
                                res.status(200);
                                res.json({total_count, data});
                        } else {
                                next(err);
                        }
                })
        })   
    
}