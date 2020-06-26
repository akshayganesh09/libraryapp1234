const express = require('express');
const signupRouter = express.Router();

function router(nav){

    var signup=[
        {
            type:"input",
            input:"text",
            value:"username",
            assign:"user",
            input1:"span",
            tom:"username"
            
        },
        {
            type:"input",
            input:"email",
            value:"mail ID",
            assign:"email",
            input1:"span",
            tom:"gmail"
        },
        {
            type:"input",
            input:"password",
            value:"Set Password",
            assign:"pass",
            input1:"span",
            tom:"pasword"
        },
        {
            type:"input",
            input:"password",
            value:"Confirm Password",
            assign:"conpass",
            input1:"span",
            tom:"confpass"
        },
        {
            type:"input",
            input:"number",
            value:"Phone Number",
            assign:"number",
            input1:"span",
            tom:"mnumber"
        }

    ]

    signupRouter.get('/',function(req,res){
    
        res.render("signup.ejs",
        
        {
            nav,
            title:'signin',
            signup
    
        });
    });

    return signupRouter;
}
    module.exports = router;