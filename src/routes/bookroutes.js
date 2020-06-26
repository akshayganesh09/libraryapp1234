const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/boodata');
const Authordata = require('../model/authordata');

function router(nav){
    // var books = [

    //     {
    //         title : 'tom and jerry',
    //         author : 'joseph barbera',
    //         genre : 'cartoon',
    //         img : "Tom.jpg"
            
    //     },
    //     {
    //         title :'Harry Potter',
    //         author :'jk rowling',
    //         genre : 'cartoon',
    //         img : "harry.jpg"
            
    //     },
    //     {
    //         title :'A passage to India',
    //         author :'E K Froster',
    //         genre : 'documentry',
    //         img : "a.jpg"
            
    //     },{
    //         title :'The Great Gatsby',
    //         author :'F. Scott Fitzgerald',
    //         genre : 'classical fiction',
    //         img : "t.png"
            
    //     }
    // ]
    
    
    
    booksRouter.get('/',function(req,res){
    Bookdata.find()
    .then(function(books){
        res.render("books.ejs",
        
        {
            nav,
            title:'Library',
            books
    
        });

    })
        
    });
    
    booksRouter.get('/:id',function(req,res){
    
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('book',
            {
                nav,
                title:'Library',
                book
            });

        })
       
    });
    booksRouter.get('/:id/delete',function(req,res){

        const id = req.params.id;
        Bookdata.deleteOne({_id: id})
        .then(function(){
            res.redirect('/books');
        })
    })
 
    booksRouter.get('/:id/edit',function(req,res){
    
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('edit',
            {
                nav,
                title:'Library',
                book
            });

        })
       
    });

    return booksRouter;

}
booksRouter.get('/:id/edit/update',function(req,res){

    const id = req.params.id;
    Bookdata.findOneAndUpdate({_id : id},{"$set":{title:req.query.title,author:req.query.author,genre:req.query.genre,image:req.query.image}})
    .then(function(book){
        book
        book.save()
        res.redirect('/books');
    })
    
    });
   
    




module.exports = router;