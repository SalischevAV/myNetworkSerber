const Model = require('../Model');
const User = Model.User;

module.exports.getAll = (req, res, next) =>{
    User.find({}, (err, data)=>{
        if(data){
            res.json(data);
        } else {
            next(err);
        }
    });
};

module.exports.get = (req, res, next) =>{
    User.findById(req.params.id, (err, data)=>{
        if(data){
            res.json(data);
        }
        else{
            next(err);
        }
    });
};

module.exports.post = (req, res, next) =>{
    User.create(
        {
          name: req.body.name,
          username: req.body.username,
          email: req.body.email,
          phone: req.body.phone,
          website: req.body.website,  
        }, (err, data, next) =>{
            if(data){
                res.status(201);
                res.set('Location', `${req.baseUrl}/${data.id}`);
                res.json(data);
            } else {
                next(err);
            }
        }
    )
};