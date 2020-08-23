
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'myNetworkDB';

MongoClient.connect(url, (err, client)=>{
    const db = client.db(dbName);
    db.collection('posts', (err, collection)=>{
        collection.aggregate([
            {
                $lookup:{
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
        .toArray((err, res)=>{
            if (err) {
                console.log('Aggregate error: ', err.message)
                throw err
              }
          
              res.forEach(item => console.log(item.comments))
              client.close();
        })   
    });
});




/*
const mongoose = require('mongoose');
const Post = require('./Model').Post;
const Album = require('./Model').Album;


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

Post.find().forEach(item=>{
    item.userId = , (err, res)=>{
        if(res){
            console.dir(res);
        } else if (err)
        {
            console.log('err:' + err)
        }
    }
})

Post.updateMany({userId:1}, {$set:{userId: '5f3845a71b19eb3984d0239b'}}, {upsert: true}, (err, res)=>{
        if(res){
            console.dir(res);
        } else if (err)
        {
            console.log('err:' + err)
        }
    });



    find().forEach(item=>{
            item.usrId = mongodb.ObjectId(item.userId);
            collection.updateOne(item, {$set:{userId:value}});
   
*/


