const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
   
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
   
    done(null, user);
});
passport.use(new GoogleStrategy({
    clientID: "85859611370-p6jo9mi3uehs5qbfsdbefr03i3mfn87v.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    
    return done(null, profile);
  }
));