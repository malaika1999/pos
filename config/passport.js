// load all the things we need
var LocalStrategy = require("passport-local").Strategy;

var Employee = require("../models/employee/index");

var myLocalConfig = passport => {
  // =========================================================================
  // passport session setup ==================================================
  // =========================================================================
  // required for persistent login sessions
  // passport needs ability to serialize and unserialize users out of session

  // used to serialize the user for the session
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    Employee.findById(id, function(err, user) {
      done(err, user);
    });
  });

  // =========================================================================
  // LOCAL LOGIN =============================================================
  // =========================================================================
  passport.use(
    "local-login",
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with email
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
      },
      function(req, email, password, done) {
         var employeeCode = req.body.employeeCode
        if (email) email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching

        // asynchronous
        process.nextTick(function() {
          Employee.findOne({ "local.email": email, "local.employeeCode": employeeCode }, function(err, user) {
            // if there are any errors, return the error
            if (err) return done(err);

            // if no user is found, return the message
            if (!user) return done(null, false);

            if (!user.validPassword(password)) return done(null, false);
            // all is well, return user
            else return done(null, user);
          });
        });
      }
    )
  );

  // =========================================================================
  // LOCAL SIGNUP ============================================================
  // =========================================================================
  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with email
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
      },
      function(req, email, password,done) {
        var employeeId= req.body.employeeId
        var name= req.body.name;
        var NIC= req.body.NIC;
        var contactNo= req.body.contactNo;
        var address= req.body.address;
        var city= req.body.city;
        var country= req.body.country;
        var state= req.body.state;
        var postalCode= req.body.postalCode;
        var dateOfBirth= req.body.dateOfBirth;
        var role= req.body.role;
        var employeeCode= req.body.employeeCode;
        var bankAccNo= req.body.bankAccNo;
        var perHourRate= req.body.perHourRate;
        var workingHoursPerWeek= req.body.workingHoursPerWeek;
        var extraHourRate= req.body.extraHourRate;
        var image= req.body.image;
        var joiningDate= req.body.joiningDate;
        if (email) email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching

        // asynchronous
        process.nextTick(function() {
          // if the user is not already logged in:
          if (!req.user) {
            Employee.findOne({ "local.email": email }, function(err, user) {
              // if there are any errors, return the error
              if (err) return done(err);

              // check to see if theres already a user with that email
              if (user) {
                return done(null, false);
              } else {
                // create the user
                var newUser = new Employee();

                newUser.local.email = email;
                newUser.local.password = newUser.generateHash(password);
                newUser.local.employeeId= employeeId
                newUser.local.name= name;
                newUser.local.NIC= NIC;
                newUser.local.contactNo= contactNo;
                newUser.local.address= address;
                newUser.local.city= city;
                newUser.local.country= country;
                newUser.local.state= state;
                newUser.local.postalCode= postalCode;
                newUser.local.dateOfBirth= dateOfBirth;
                newUser.local.role= role;
                newUser.local.employeeCode= employeeCode;
                newUser.local.bankAccNo= bankAccNo;
                newUser.local.perHourRate= perHourRate;
                newUser.local.workingHoursPerWeek= workingHoursPerWeek;
                newUser.local.extraHourRate= extraHourRate;
                newUser.local.image= image;
                newUser.local.joiningDate= joiningDate;

                newUser.save(function(err) {
                  if (err) return done(err);

                  return done(null, newUser);
                });
              }
            });
            // if the user is logged in but has no local account...
          } else if (!req.user.local.email) {
            // ...presumably they're trying to connect a local account
            // BUT let's check if the email used to connect a local account is being used by another user
            Employee.findOne({ "local.email": email }, function(err, user) {
              if (err) return done(err);

              if (user) {
                return done(null, false);
                // Using 'loginMessage instead of signupMessage because it's used by /connect/local'
              } else {
                var user = req.user;
                user.local.email = email;
                user.local.password = user.generateHash(password);
                user.local.employeeId= employeeId
                user.local.name= name;
                user.local.NIC= NIC;
                user.local.contactNo= contactNo;
                user.local.address= address;
                user.local.city= city;
                user.local.country= country;
                user.local.state= state;
                user.local.postalCode= postalCode;
                user.local.dateOfBirth= dateOfBirth;
                user.local.role= role;
                user.local.employeeCode= employeeCode;
                user.local.bankAccNo= bankAccNo;
                user.local.perHourRate= perHourRate;
                user.local.workingHoursPerWeek= workingHoursPerWeek;
                user.local.extraHourRate= extraHourRate;
                user.local.image= image;
                user.local.joiningDate= joiningDate;
                user.save(function(err) {
                  if (err) return done(err);

                  return done(null, user);
                });
              }
            });
          } else {
            // user is logged in and already has a local account. Ignore signup. (You should log out before trying to create a new account, user!)
            return done(null, req.user);
          }
        });
      }
    )
  );
};

module.exports = myLocalConfig;
