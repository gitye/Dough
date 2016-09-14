'use strict'
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const userCtrl = require('./controllers/user-controller.js');
const goalsCtrl = require('./controllers/goals-controller.js');
const expenseCtrl = require('./controllers/expense-controller.js');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user.js');
const PassportUse = require('./passport.js')
const path = require('path');

app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(bodyParser());
app.use(express.static(path.join(__dirname, './client')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './../index.html'))
});

app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // authentication was successful.
    // `req.user` contains the authenticated user.
    res.send('authentication successful');
  }
);

// user api
app.post('/signup', userCtrl.signup);
app.get('/api/user/:username', userCtrl.getUser);

// expenses api
app.get('/api/user/:username/expense', expenseCtrl.getAll);
app.post('/api/user/:username/expense', expenseCtrl.create);

// goals api
// app.get('/api/user/:username/goals', goalsCtrl.getGoal);
// app.post('/api/user/:username/goals', goalsCtrl.makeGoal);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.listen(3000, () => {
  console.log('serving port 3000..');
});