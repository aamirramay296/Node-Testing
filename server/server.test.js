const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

it('should return hello world !', (done) => {
    
   request(app)
   .get('/')
  // .expect('Hello World!')
  
  // .expect({
     //  err:'Page Not Found!!'
 //  })
 
   
   //.expect(404) // 200 means OK
   
   .expect((res) => { //res js obj with key, value pair ...
       expect(res.body).toInclude({
           err:'Page Not Found!!'
       });
   })
   .end(done); 
   
   // res has access of header , body
});

it('should check the obj of arrays', (done) => {
   
   request(app)
   .get('/user')
   .expect(200)
   .expect((res) => {
     
     expect(res.body[0]).toInclude({
         name:'Aamir'
     });  
   })
    .end(done);
    
});