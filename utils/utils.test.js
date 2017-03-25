const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
    var res = utils.add(2,3);
   
   //expect(res).toBe(5); // it generates error automatically expected 5 ... 
    expect(res).toBe(5).toBeA('number');
    
    // if(res !== 5) 
    // {
    //     throw new Error(`Expected 44, but got ${res}`);
    // }
});

it('should take square', () => {
   var res = utils.square('2');
   
//    if(res !== 4) {
//        throw new Error(`Expected 4 but got ${res}`);
//    }
// expect(res).toBe(4).toBeA('number');

});

//  it('should expect some values', () => {
//    expect(12).toNotBe(11);
//   // expect({name: 'Aamir'}).toBe({name:'Aamir'}); // error
//   // expect({name: 'Aamir'}).toEqual({name:'Aamir'}); //works fine 
//   // expect({name: 'aamir'}).toNotEqual({name:'Aamir'}); // works fine
     
//     expect([1,2,3]).toInclude(2); // works fine , this is gonna if num 2 exits 
//     expect([1,2,3]),toExclude(4); // check of 4 to not in the array
    
    
//     /** toInclude and toExclude works fine with the onjects as well */
//     expect({
//         name: 'Aamir',
//         age: 23,
//         location:'Pakistan'
//     }).toInclude({
//         age:23
//     });
    
// });

//toBe dows not work with arrays r objects ...  


it('should verify user object properties' ,() => {
    
      var userObj = utils.setName({
          age: 25,
          location:'Pakistan'
      },'Aamir Naeem');
      
     expect(userObj).toInclude({
         
         firstName:'Aamir',
         lastName:'Naeem'
         
     }).toBeA('object');
    
//    var user = {age: 24, location:'Pakistan'};
    
//     var res = utils.setName(user,'Aamir Naeem');
    
    
//     // In javascript objects are pass as by reference ... 
//     expect(res).toInclude({
//         firstName:'Aamir',
//         lastName:'Naeem'
//     });
});




// should verify first and last name are set
// assert it includes firstName and lastName with proper values



/**Async Testing ... */
it('should async add two numbers', (done) => { // for async to tell mocha its async
   utils.asyncAdd(4,3, (sum) => {
       
       expect(sum).toBe(7).toBeA('number');
       done();
   }) ;
});


it('should async square a number', (done) => {
   
   utils.asyncSquare(4 , (sqr) => {
       expect(sqr).toBe(16).toBeA('number');
       done();
   }); 
});