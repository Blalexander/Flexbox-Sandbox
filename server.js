const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');


const app = express();


//DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
.connect(db)
.then(() => console.log('MongoDB Connected')) //If connection successful
.catch(err => console.log(err)); //If connection not successful

app.get('/', (req, res) => res.send('Hello World'));

//Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


const port = process.env.PORT || 8080;  //when deployed to heroku, either looks to env OR defaults to 8080

app.listen(port, () => console.log(`Server running on port ${port}`));