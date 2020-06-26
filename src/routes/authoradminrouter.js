const express = require('express');
const adminmRouter = express.Router();
const   Authordata = require('../model/authordata');


function router(nav){
    adminmRouter.get('/',function(req,res){

        res.render('newauthor', {
            nav,
            title : 'Library'
        })
    })

    adminmRouter.post('/add', function(req,res){
        var item = {
            author: req.body.author,
            title: req.body.title,
            genre: req.body.genre,
            image: req.body.image
        }
        
        var author = Authordata(item);
        author.save();
        res.redirect('/authors');
    })
    
    return adminmRouter;
}

module.exports = router;
