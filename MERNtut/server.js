
const express = require('express');
const app = express();



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

app.get('/contact', (req, res)=> {
    res.send('This is my contact id');
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


