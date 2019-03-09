'use strict';
const mongoose = require('mongoose');
const {User} = require('../users/models');

mongoose.Promise = global.Promise;

const entrySchema = mongoose.Schema({
  customBackground: {
    type: String,
    required: true
  },  
  // upload: {
  //   type: String,
  //   required: false
  // },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

entrySchema.pre('findOne', function(next) {
  this.populate('user');
  next();
});

entrySchema.virtual('username').get(function(){
  return this.user.username;
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = {Entry};