const express = require('express');
const authorsRouter = express.Router();
const Authordata = require('../model/authordata');


function router(nav){
    // var authors = [

    //     {
    //         title : 'tom and jerry',
    //         author : 'joseph barbera',
    //         genre : 'cartoon',
    //         img : "joseph.jpg"
            
    //     },
    //     {
    //         title :'Harry Potter',
    //         author :'jk rowling',
    //         genre : 'fantasy',
    //         img : "jk.jpg"
            
    //     },
    //     {
    //         title :'A passage to India',
    //         author :'E K Froster',
    //         genre : 'documentry',
    //         img : "em.jpg"
            
    //     },{
    //         title :'The Great Gatsby',
    //         author :'F. Scott Fitzgerald',
    //         genre : 'classical fiction',
    //         img : "F.jpg"
            
    //     }
    // ]
    
    
    
    authorsRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){

            res.render("authors.ejs",
        
            {
                nav,
                title:'Library',
                authors
        
            });
        })
    
  
    });
    
    authorsRouter.get('/:id',function(req,res){
    
        const id = req.params.id;
        Authordata.findOne({_id: id})
        .then(function(author){
            res.render('author',
            {
                nav,
                title:'Library',
                author
            });
        })
       
    });
    authorsRouter.get('/:id/delete',function(req,res){

        const id = req.params.id;
        Authordata.deleteOne({_id: id})
        .then(function(){
            res.redirect('/authors');
        })
    })

    authorsRouter.get('/:id/edit1',function(req,res){
    
        const id = req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render('edit1',
            {
                nav,
                title:'Library',
                author
            });

        })
       
    });

    return authorsRouter;

}
authorsRouter.get('/:id/edit1/update',function(req,res){

    const id = req.params.id;
    Authordata.findOneAndUpdate({_id : id},{"$set":{author:req.query.author,title:req.query.title,genre:req.query.genre,image:req.query.image}})
    .then(function(author){
        author
        author.save()
        res.redirect('/authors');
    })
    
    });



module.exports = router;