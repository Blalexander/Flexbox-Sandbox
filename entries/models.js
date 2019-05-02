'use strict';
const mongoose = require('mongoose');
const {User} = require('../users/models');

mongoose.Promise = global.Promise;

const scoreSchema = mongoose.Schema({
  highScore: {
    type: Number,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

scoreSchema.pre('findOne', function(next) {
  this.populate('user');
  next();
});

scoreSchema.virtual('username').get(function(){
  return this.user.username;
});

const Scores = mongoose.model('Scores', scoreSchema);

module.exports = {Scores};