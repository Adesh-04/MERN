const mongoose = require('mongoose');
const express = require('express');
const app = express();


const DB = "mongodb+srv://new_user:new@atlasazure.epz5f.mongodb.net/mernStack?retryWrites=true&w=majority"

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('connection successful');
}).catch((err) => console.log('No connection'));






const middleware = (res,req,next) =>{
    console.log('I am Middleware')
    next();
}







app.get('/', (req, res)=> {
    res.send('Hello World from Express');
}) ;                                         // syntax: app.get( path, callback)

app.get('/about',middleware, (req, res)=> {
    res.send('Here you can see my information');
}) ;                                         

app.get('/purchase', (req, res)=> {
    res.send('These are the products');
}) ; 

app.get('/cart',middleware, (req, res)=> {
    res.send('This is the cart');
}) ; 

app.get('/login', (req, res)=> {
    res.send('Hello, welcome back');
}) ;     

app.get('/signin', (req, res)=> {
    res.send('Hello, good to see you');
}) ;                                         

app.listen(3000, ()=> {
    console.log('SERVER is running at port 3000');
}) ;                                        // syntax: app.listen( port, callback)


