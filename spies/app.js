var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
    
    // check if the email already exists ...
    
    // save the user to the database
     db.saveUser({

         email: email, // IN ES6 email
         password: password // In ES6 password
     });

    // send the welcome email
};