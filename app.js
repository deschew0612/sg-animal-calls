//import Express module (webapp framework for node.js) and create an app instance
const express = require('express');
const app = express();

//import path module for file and directory paths
const path = require('path');

//import the array of animals in constants module
const constants = require('./lib/constants.js');

//unpack the array of animals in the constants module (akin to a container)
const animals = constants.animals

// Import PrismaClient
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//set up the view engine for the Express app to ejs (embedded js)
app.set('view engine', 'ejs');
//Serve static files from the 'public' dir
app.use(express.static(path.join(__dirname, 'public')));
// Serve images from the 'lib/images' directory
app.use('/images', express.static(path.join(__dirname, 'lib', 'images')));
// Serve sounds from the 'lib/images' directory
app.use('/sounds', express.static(path.join(__dirname, 'lib', 'sounds')));
//needed for db connection (url specified in .env)
app.use(express.urlencoded({ extended: true }));


// Define home route -- render the index.ejs template and pass in the animals array  
app.get('/', (req, res) => {
    res.render('index', { animals });
});

//Define animals JSON route for the filter function -- when requested, it responds with a json representation of the 'animals' array
app.get('/animals', (_req, res) => {
    res.json(animals);
})

// Define indiv animal route: extract the 'id' parameter from the request, retrieve the corresponding animal from 'animals' array, populate the animal.ejs template with the specific animal's data
// app.get('/animals/:id', (req, res) => {
//     const { id } = req.params

//     const animal = animals[id]

//     res.render('animal', { animal });
// });

// define sources route -- render the sources.ejs template*/ 
app.get('/sources', (req, res) => {
    res.render('sources',{ animals });
});

// Route to handle user's form submission (animal of interest) to db 
app.post('/addAnimal', async (req, res) => {
    const { newAnimalName, newAnimalDescription } = req.body;

    try {
        // Use Prisma to insert the new animal data into the database
        const createdAnimal = await prisma.userInputAnimal.create({
            data: {
                animal: newAnimalName,
                description: newAnimalDescription
            }
        });

        console.log('New entry received:', createdAnimal);

        // Redirect the user back to the homepage
        res.redirect('/');
    } catch (error) {
        // Handle any errors that occur during the database operation
        console.error('Error sending entry:', error);

        res.status(500).send('Error sending entry');
    }
});

//start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});