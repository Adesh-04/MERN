const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.send('Hello World from Express')
}) ;                                         // syntax: app.get( path, callback)

console.log('Command line working Properly ' )