const express = require('express');

var app = express();

// express routes ... 

app.get('/', (req, res ) => {
    
    res.status(404).send({
        err:'Page Not Found!!',
        name:'Todo App v.10'
    });
    
    // res.status(404).send('Hello World!');
});


// GET /users obj of users
// give users a name property and age property

app.get('/user', (req, res) => {
   res.send([
       
       { name:'Aamir', age:24 },
       { name:'Aamir', age:24 },
       { name:'Hassan',age:100 } 
       
   ]);
});






app.listen(3000, () => {
    console.log('Starting Server 3000');
});

// Using Library Super Test .. For Express
// Dev By The Team Who Originally Created Express ...
// www. github/visionmedia.supertest 
// npm install supertest@2.0.0 --save-dev

module.exports.app = app;

