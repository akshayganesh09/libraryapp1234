const express = require('express');
const loginRouter = express.Router();

function router(nav){

    var login=[
        {
            type:"input",
            // label:"username",
            input:"text",
            value:"username",
            assign:"user",
            input1:"span",
            tom:"username"
            
        },
        {
            type:"input",
            input:"password",
            value:"Password",
            assign:"pass",
            input1:"span",
            tom:"pasword"
        }

    ]

    loginRouter.get('/',function(req,res){
    
        res.render("login.ejs",
        
        {
            nav,
            title:'Login',
            login
    
        });
    });

    return loginRouter;
}
    module.exports = router;