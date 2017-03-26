const expect = require('expect');
const rewire = require('rewire');


var app = rewire('./app.js');

describe('App' , () => {

    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db',db);
    
    it('should call the spy correctly', () => {

        var spy = expect.createSpy(); // its gonna return a function
        spy('Aamir',24); 
        
        // spy();
       // expect(spy).toHaveBeenCalled();
       expect(spy).toHaveBeenCalledWith('Aamir',24);
    });

    it('should call saveUser with the user object', () => {
        var email = 'aamir.ramay1@gmail.com';
        var password = 'aamir2763';

        app.handleSignup(email,password);
        expect(db.saveUser).toHaveBeenCalledWith
            ({
                email:email,
                password:password
            });
    });
});

// npm install rewire@2.5.2 --save-dev