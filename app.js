/*import Express module (webapp framework for node.js) and create an app instance*/
const express = require('express');
const app = express();

/*import path module for file and directory paths*/
const path = require('path');

/*import the array of animals in constants module*/
const constants = require('./lib/constants.js');

// Import PrismaClient
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/*set up the view engine for the Express app to ejs (embedded js)*/
app.set('view engine', 'ejs');
/*Serve static files from the 'public' dir*/
app.use(express.static(path.join(__dirname, 'public')));

/*unpack the array of animals in the constants module (akin to a container)*/
const animals = constants.animals

/* Define home route -- render the index.ejs template and pass animals array to template */
app.get('/', (req, res) => {
    res.render('index', { animals });
});

/*Define animals JSON route for filter function -- when accessed, it responds with a json representation of the 'animals' array*/
app.get('/animals', (_req, res) => {
    res.json(animals);
})

/* Define indiv animal route: extract the 'id' parameter from the request, retrieve the corresponding animal from 'animals' array, render the animal.ejs template with the specific animal's data*/
app.get('/animals/:id', (req, res) => {
    const { id } = req.params

    const animal = animals[id]

    res.render('animal', { animal });
});

/* define route -- render the sources.ejs template*/ 
app.get('/sources', (req, res) => {
    res.render('sources',{ animals });
});
  
/*start the server*/
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});