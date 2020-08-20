const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const url = require('url');
const querystring = require('querystring');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);


const Routes = require('./Routes');

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

app.use((req, res, next)=>{
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Contetnt-type, Accept');
    app.options((req,res)=>{
        res.set('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
    next();
})

app.use('/api/', bodyParser.urlencoded({extended: true}));
app.use('/api/', bodyParser.json());
app.use('/api/users', Routes.usersRouter);
app.use('/api/posts', Routes.postsRouter);
app.use('/api/comments', Routes.commentsRouter);
app.use('/api/albums', Routes.albumsRouter);





app.use((req, res, err)=>{
    if(res.headersSent){
        return next(err);
    } else if(err == 400){
        res.status(400);
        res.send('Bad request');
    } else {
        res.status(500);
        res.send('Internal Server Error');
    }
});

app.use((req, res)=>{
    res.status(404);
    res.send('Not Found');
});

server.listen(8080, (err)=>{
    if(err){
        throw new Error(err);
    }
    console.log('server is running');
})