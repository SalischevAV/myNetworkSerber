const mongoose = require('mongoose');
const Post = require('./Model').Post;
mongoose.connect('mongodb://localhost:27017/myNetworkDB',
                {
                useNewUrlParser: true,    
                useUnifiedTopology: true
                }, err =>{
                    if(err){
                        console.log(err);
                        throw new Error(err);
                    } else {
                        console.log('mongoose connected');
                    }
                });

Post.aggregate([{$unset:'id'}], (err, res)=>{
    if(res){
        console.log('ok');
    } else if (err)
    {
        console.log('err:' + err)
    }
}

); 

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