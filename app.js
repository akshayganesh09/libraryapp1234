const express = require('express');
const app = express();
const nav = [
        {
            link:'/books',name:'Books'
        },
        {
            link:'/authors',name:'Authors'
        },
        // {
        //     link:'/login',name:'Login'
        // },
        // {
        //     link:'/signup', name:'Signup'
        // },
        {
            link:'/admin', name:'NewBook'
        },
        {
            link:'/admin1', name:'NewAuthor'
        },
        {
            link:'/adminsignup', name:'signup'
        },
        {
            link:'/adminlogin', name:'Login'
        }
        
    ];

const booksRouter = require('./src/routes/bookroutes')(nav)
const authorsRouter = require('./src/routes/authorrouter')(nav)
const loginRouter = require('./src/routes/loginrouter')(nav)
const signupRouter = require('./src/routes/signuprouter')(nav)
const adminRouter = require('./src/routes/adminrouter')(nav)
const adminmRouter = require('./src/routes/authoradminrouter')(nav)
const newsignupRouter = require('./src/routes/newsignupRouter')(nav)
const newloginRourter = require('./src/routes/newloginRouter')(nav)

app.use(express.urlencoded({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs'); 
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/admin',adminRouter);
app.use('/admin1',adminmRouter);
app.use('/adminsignup',newsignupRouter);
app.use('/adminlogin',newloginRourter);

app.get('/',function(req,res){

    res.render("index",

    {
        nav,
        title:'Library'

    });  
});
   

app.listen(5000);