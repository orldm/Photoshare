var bcrypt = require('bcrypt');
var LocalStrategy = require('passport-local').Strategy;
var salt = bcrypt.genSaltSync(10);

exports.strategy = function(db) {
  return new LocalStrategy(function(username, password, done) {
    db.findOne({username: username}, function(err, user) {
      if (!user) {
        done(null, false, {message: 'Incorrect username'});
      } else if (!bcrypt.compareSync(password, user.passwordHash)) {
        done(null, false, {message: 'Incorrect password'});
      } else {
        done(null, user);
      }
    });
  });
};
