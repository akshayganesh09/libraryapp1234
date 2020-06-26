const express = require('express');
const newsignupRouter = express.Router();
const Signdata = require('../model/signupdata');



function router(nav){

    newsignupRouter.get('/',function(req,res){

        res.render('signnew',{
    
            nav,
            title: 'Library'
        })
    })
    newsignupRouter.post('/add',function(req,res){

        var num = {
            user: req.body.user,
            email: req.body.email,
            pass: req.body.pass,
            conpass: req.body.conpass,
            number: req.body.number
        }
        var Num = Signdata(num);
         Num.save();
         res.redirect('/login');
    });
   


    return newsignupRouter;
}

module.exports = router; 