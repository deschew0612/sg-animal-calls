const express = require('express');
const app = express();
const path = require('path');
const constants = require('./lib/constants.js');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const animals = constants.animals

/* show index.ejs with animal grid */
app.get('/', (req, res) => {
    res.render('index', { animals });
});

app.get('/animals', (_req, res) => {
    res.json(animals);
})

/* show animal.ejs based on animal id clicked*/
app.get('/animals/:id', (req, res) => {
    const { id } = req.params

    const animal = animals[id]

    res.render('animal', { animal });
});

/* show sources.ejs when user clicks 'Sources'*/
app.get('/sources', (req, res) => {
    res.render('sources');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});