const express = require('express');
const newloginRouter = express.Router();
const Logindata = require('../model/logindata');



function router(nav){

    newloginRouter.get('/',function(req,res){

        res.render('loginnew',{
    
            nav,
            title: 'Library'
        })
    })
    newloginRouter.post('/add',function(req,res){

        var numm = {
            user: req.body.user,
            pass: req.body.pass,

        }
        var Num1 = Logindata(numm);
         Num1.save();
         res.redirect('/');
       
    });
   


    return newloginRouter;
}

module.exports = router; 