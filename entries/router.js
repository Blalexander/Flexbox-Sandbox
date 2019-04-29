'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const {Entry} = require('./models');
const {Scores} = require('./models');
const {User} = require('../users/models');
const jwtAuth = passport.authenticate('jwt', { session: false });
const router = express.Router();

const jsonParser = bodyParser.json();

// reqs jwt sign to test
router.post('/', jwtAuth, jsonParser, (req, res)=>{
  const requiredFields = ['customBackground'];
  requiredFields.forEach(field => {
    if(!(field in req.body)){
      const msg = `Missing ${field} in request body.`;
      console.error(msg);
      return res.status(400).send(msg);
    }
  });
  Entry
    .create({
      customBackground: req.body.customBackground,
      // upload: req.body.upload,
      user: req.user.id
    })
    .then(entry=>res.status(201).json(entry))
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: "Internal server error when posting new entry." });
    });        
});

router.post('/scores', jwtAuth, jsonParser, (req, res)=>{
  const requiredFields = ['scoreTracker'];
  requiredFields.forEach(field => {
    if(!(field in req.body)){
      const msg = `Missing ${field} in request body.`;
      console.error(msg);
      return res.status(400).send(msg);
    }
  });
  Scores
    .create({
      highScore: req.body.scoreTracker,
      // upload: req.body.upload,
      user: req.user.id
    })
    .then(entry=>res.status(201).json(entry))
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: "Internal server error when posting new score." });
    });        
});

router.put('/:user_id', jwtAuth, jsonParser, (req, res)=>{
  const requiredFields = ['customBackground'];
  requiredFields.forEach(field => {
    if(!(field in req.body)){
      const msg = `Missing ${field} in request body.`;
      console.error(msg);
      return res.status(400).send(msg);
    }
  });

  const toUpdate = {};
  const updatableFields = ['customBackground'];
  updatableFields.forEach(field=>{
    if(field in req.body){
      toUpdate[field] = req.body[field];
    }
  });

  Entry
    .findOneAndUpdate({"user": req.params.user_id}, {$set: toUpdate})
    .then(updatedEntry=>{
      console.log(`Updated item with id ${req.params.id}.`);
      res.status(200).json({
        customBackground: updatedEntry.customBackground
      });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: "Internal server error with updating entry." });
    });
});

router.put('/scores/:user_id', jwtAuth, jsonParser, (req, res)=>{
  Scores
    .findOneAndUpdate({"user": req.params.user_id}, {$set: {highScore: req.body.scoreTracker}})
    .then(updatedScores=>{
      console.log(`Updated item with id ${req.params.user_id}.`);
      res.status(200).json({
        highScore: updatedScores.highScore
      });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: "Internal server error with updating scores." });
    });
});


router.get('/by-user/:user_id', (req, res) => {
  return Entry.find({user: req.params.user_id})
    .then(entries => {
      let revisedEntries = entries.map(entry => {return entry.customBackground})
      res.json(revisedEntries);
    })
    .catch(err => res.status(500).json({message: 'Internal server error when getting entries by user id.'}));
});

router.get('/scores/:user_id', (req, res) => {
  return Scores.find({user: req.params.user_id})
    .then(scores => {
      let revisedScores = scores.map(score => {return score.highScore})
      res.json(revisedScores);
      // res.json(scores)
    })
    .catch(err => res.status(500).json({message: 'Internal server error when getting scores by user id.'}));
});



router.get('/:id', (req, res) => {
  return Entry.findById(req.params.id)
    .then(entries => {
      res.json(entries);
    })
    .catch(err => res.status(500).json({message: 'Internal server error when getting entry by id.'}));
});

router.delete('/:id', jwtAuth, (req, res)=>{
  Entry.findByIdAndRemove(req.params.id)
    .then(()=>{
      console.log(`Deleted entry with id ${req.params.id}.`);
      res.status(204).end();
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: "Internal server error when deleting entry." });
    });
});

module.exports = {router};